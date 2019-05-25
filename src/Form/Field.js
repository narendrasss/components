import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useFormContext } from './FormContext'
import './style.scss'

function Field(props) {
  const { label, children } = props
  const layout = useFormContext()
  const labelName = label.replace(' ', '-')
  return (
    <div className={clsx('form__field', `form__field--${layout}`)}>
      <label className="form__field__label" htmlFor={labelName}>
        {label}
      </label>
      {React.Children.map(React.Children.only(children), child =>
        React.cloneElement(child, { id: labelName, name: labelName })
      )}
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
}

export default Field
