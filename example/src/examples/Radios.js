import React, { useState } from 'react'
import { Radio } from '@narendras/components'

function Radios() {
  const [valTwo, setValTwo] = useState(0)
  return (
    <section>
      <h1>Radio Buttons</h1>
      <p>Uncontrolled basic radio group</p>
      <Radio.Group>
        <Radio value={0}>One</Radio>
        <Radio value={1}>Two</Radio>
        <Radio value={2}>Three</Radio>
        <Radio value={3}>Four</Radio>
      </Radio.Group>
      <p>Controlled radio group with button style radio</p>
      <p>
        <code>
          Current value is
          {` `}
          {valTwo}
        </code>
      </p>
      <Radio.Group
        name="context"
        value={valTwo}
        onChange={e => setValTwo(+e.target.value)}
      >
        <Radio.Button value={1}>One</Radio.Button>
        <Radio.Button value={2}>Two</Radio.Button>
        <Radio.Button value={3}>Three</Radio.Button>
        <Radio.Button value={4}>Four</Radio.Button>
      </Radio.Group>
    </section>
  )
}

export default Radios
