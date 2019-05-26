import PropTypes from 'prop-types'

export const refPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.element })
])

export default { refPropType }
