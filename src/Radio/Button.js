/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import { string, node, bool } from 'prop-types'
import clsx from 'clsx'

function Button({ className, children, checked, ...props }) {
  return (
    <label
      className={clsx('radio__label', 'radio__button', className, {
        'radio__button--checked': checked
      })}
    >
      <input className="radio__input" type="radio" {...props} />
      {children}
    </label>
  )
}

Button.propTypes = {
  children: node.isRequired,
  className: string,
  checked: bool
}

Button.defaultProps = {
  className: '',
  checked: false
}

export default Button
