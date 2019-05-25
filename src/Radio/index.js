/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import { string, node } from 'prop-types'
import clsx from 'clsx'

import Group from './Group'
import Button from './Button'
import './style.scss'

function BaseRadio({ className, children, ...rest }) {
  return (
    <label className={clsx('radio__label', className)}>
      <input className="radio__input" type="radio" {...rest} />
      <div className="radio__checkbox" />
      {children}
    </label>
  )
}

BaseRadio.propTypes = {
  children: node.isRequired,
  className: string
}

BaseRadio.defaultProps = {
  className: ''
}

const Radio = React.forwardRef((props, ref) => (
  <BaseRadio {...props} ref={ref} />
))

Radio.Group = Group
Radio.Button = Button

export default Radio
