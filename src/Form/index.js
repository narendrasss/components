import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field'
import FormContext from './FormContext'
import './style.scss'

function Form({ children, layout, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <FormContext.Provider value={layout === 'inline' ? 'horizontal' : layout}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

Form.Field = Field

Form.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  onSubmit: PropTypes.func
}

Form.defaultProps = {
  layout: 'vertical',
  onSubmit: f => f
}

export default Form
