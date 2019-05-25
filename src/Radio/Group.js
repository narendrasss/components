import React, { useState } from 'react'

/**
 * Currently the "uncontrolled" version of the component
 * is implemented by explicitly using useState (instead of
 * the browser managing the state) and passing the "checked"
 * prop onto the radio inputs.
 *
 * This is done so that I am able to style the wrapper depending
 * on if the box is checked or not (which is not possible purely
 * using CSS).
 *
 * TODO:
 * - Change implementation so useState is not needed.
 *  - This should improve accessibility.
 */

function Children({ children, ...props }) {
  const [value, setValue] = useState(null)
  // create controlled context
  if (props.value != null && props.onChange) {
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        checked: child.props.value === props.value,
        onChange: props.onChange,
        name: props.name
      })
    )
  }
  // uncontrolled component
  return React.Children.map(children, child =>
    React.cloneElement(child, {
      checked: typeof value === 'string' && String(child.props.value) === value,
      onChange(e) {
        setValue(e.target.value)
        if (props.onChange) props.onChange(e)
      },
      name: props.name
    })
  )
}

function Group(props) {
  return (
    <div className="radio__group">
      <Children {...props} />
    </div>
  )
}

export default Group
