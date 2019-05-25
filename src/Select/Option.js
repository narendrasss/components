import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useSelectContext } from './SelectContext'
import { actions } from './state'
import './style.scss'

function Option({ value, children }) {
  const { dispatch, selectedValue, onChange } = useSelectContext()

  const changeHandler = evt => {
    evt.preventDefault()
    evt.persist()
    dispatch(actions.select(evt.target.value))
    onChange(evt)
  }

  const selected = value === selectedValue
  return (
    <button
      className={clsx('select__option', {
        'select__option--selected': selected
      })}
      type="button"
      onClick={changeHandler}
      value={value}
    >
      {children}
    </button>
  )
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Option
