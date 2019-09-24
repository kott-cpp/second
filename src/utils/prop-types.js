import PropTypes from 'prop-types'

export const wrapperShape = PropTypes.onOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.func,
])
