import React, { useState } from 'react'
import { Form, Input, Radio, Select } from '@narendras/components'

function Forms() {
  const [layout, setLayout] = useState('vertical')
  const [account, setAccount] = useState('debit')
  const [card, setCard] = useState('visa')
  const [category, setCategory] = useState('food')

  return (
    <section>
      <h1>Forms</h1>
      <div style={{ marginBottom: '2em' }}>
        <h3 style={{ marginBottom: '1em' }}>Layout</h3>
        <Radio.Group value={layout} onChange={e => setLayout(e.target.value)}>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
        </Radio.Group>
      </div>
      <Form layout={layout}>
        <Form.Field label="vendor">
          <Input placeholder="Type here" />
        </Form.Field>
        <Form.Field label="amount">
          <Input type="number" placeholder="Type here" />
        </Form.Field>
        <Form.Field label="date">
          <Input type="date" placeholder="Type here" />
        </Form.Field>
        <Form.Field label="account type">
          <Radio.Group
            value={account}
            onChange={e => setAccount(e.target.value)}
          >
            <Radio.Button value="debit">Debit</Radio.Button>
            <Radio.Button value="credit">Credit</Radio.Button>
          </Radio.Group>
        </Form.Field>
        <Form.Field label="card type">
          <Radio.Group value={card} onChange={e => setCard(e.target.value)}>
            <Radio.Button value="visa">Visa</Radio.Button>
            <Radio.Button value="mastercard">Mastercard</Radio.Button>
            <Radio.Button value="amex">Amex</Radio.Button>
          </Radio.Group>
        </Form.Field>
        <Form.Field label="category">
          <Select hasSearch>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="gas">Gas</Select.Option>
            <Select.Option value="groceries">Groceries</Select.Option>
          </Select>
        </Form.Field>
      </Form>
    </section>
  )
}

export default Forms
