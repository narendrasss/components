/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-testing-library'
import Form from '..'

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
})

describe('form field', () => {
  const props = {
    label: 'test',
    children: 'test'
  }

  it('throws when rendered outside a form', () => {
    expect(() => render(<Form.Field {...props} />)).toThrowError()
  })
})
