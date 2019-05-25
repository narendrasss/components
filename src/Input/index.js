/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react'
import { string, node } from 'prop-types'
import clsx from 'clsx'
import './style.scss'

function Input(props) {
  const inputEl = useRef(null)
  const { className, before, after, prefix, suffix, ...inputProps } = props
  return (
    <div className={clsx('input__wrapper', className)}>
      {before && <div className="input__container input__prefix">{before}</div>}
      <div className="input__container" onClick={() => inputEl.current.focus()}>
        {prefix && <span className="input__icon">{prefix}</span>}
        <input className="input" {...inputProps} ref={inputEl} />
        {suffix && <span className="input__icon">{suffix}</span>}
      </div>
      {after && <div className="input__container input__prefix">{after}</div>}
    </div>
  )
}

Input.propTypes = {
  className: string,
  before: node,
  after: node,
  prefix: node,
  suffix: node
}

export default Input
