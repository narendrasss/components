import React, { useState } from 'react'
import { func, string } from 'prop-types'
import Input from '../Input'

// TODO: Add suppport for uncontrolled component

function InputNumber(props) {
  const [hasFocus, setHasFocus] = useState(false)

  const { formatter, ...rest } = props
  const { value } = rest
  if (!hasFocus) {
    return (
      <Input
        {...rest}
        onFocus={() => setHasFocus(true)}
        value={formatter(value)}
        type="text"
      />
    )
  }
  return <Input {...rest} onBlur={() => setHasFocus(false)} type="number" />
}

InputNumber.propTypes = {
  formatter: func,
  // eslint-disable-next-line react/require-default-props
  value: string
}

InputNumber.defaultProps = {
  formatter: f => f
}

export default React.forwardRef((props, ref) => (
  <InputNumber {...props} ref={ref} />
))
