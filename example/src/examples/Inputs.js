import React, { useState } from 'react'
import { Input, InputNumber } from '@narendras/components'

function Inputs() {
  const [val, setVal] = useState('')
  return (
    <section>
      <h1>Inputs</h1>
      <p>Normal input with prefix</p>
      <Input before="Name" placeholder="Type here" />
      <p>Number input</p>
      <InputNumber
        after="CAD"
        placeholder="Type here"
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    </section>
  )
}

export default Inputs
