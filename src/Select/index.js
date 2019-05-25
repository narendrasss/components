import React, { useReducer, useRef } from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import Input from '../Input'
import Option from './Option'
import SelectContext from './SelectContext'
import reducer, { actions } from './state'
import './style.scss'

function Select(props) {
  const blurTimeout = useRef(null)

  const { value, defaultValue } = props
  const initialState = {
    selectedValue: value || defaultValue || undefined,
    searchValue: value || defaultValue || '',
    showDropdown: false
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const { hasSearch, placeholder, searchFn, onChange, children } = props
  const { selectedValue, searchValue, showDropdown } = state
  const displayPlaceholder = selectedValue || placeholder

  const values = React.Children.toArray(children).map(
    child => child.props.value
  )
  const suggestions = React.Children.toArray(children).filter(child =>
    hasSearch ? searchFn(searchValue, child.props.value) : true
  )

  const blurHandler = () => {
    if (blurTimeout.current) clearTimeout(blurTimeout.current)
    blurTimeout.current = setTimeout(() => {
      if (searchValue.length && !values.includes(searchValue)) {
        const selected = suggestions.length ? suggestions[0].props.value : value
        return dispatch(actions.select(selected))
      }
      return dispatch(actions.closeDropdown())
    }, 10)
  }

  return (
    <SelectContext.Provider value={{ selectedValue, onChange, dispatch }}>
      {hasSearch ? (
        <Input
          className="select__input"
          onFocus={() => dispatch(actions.openDropdown())}
          onBlur={blurHandler}
          onChange={e => dispatch(actions.updateSearch(e.target.value))}
          value={searchValue}
          placeholder={displayPlaceholder}
          suffix={
            showDropdown ? (
              <MdKeyboardArrowUp size="1.5em" />
            ) : (
              <MdKeyboardArrowDown size="1.5em" />
            )
          }
          data-testid="input"
        />
      ) : (
        <button
          className="select__button"
          type="button"
          onClick={() => dispatch(actions.toggleDropdown())}
          data-testid="button"
        >
          {displayPlaceholder}
        </button>
      )}
      {showDropdown ? (
        <div className="select__dropdown" data-testid="dropdown">
          {suggestions}
        </div>
      ) : null}
    </SelectContext.Provider>
  )
}

Select.Option = Option

Select.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  hasSearch: PropTypes.bool,
  searchFn: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
}

Select.defaultProps = {
  onChange: f => f,
  hasSearch: false,
  searchFn: (value, option) => RegExp(`${value}`, 'i').test(option),
  placeholder: 'Select an option'
}

export default Select
