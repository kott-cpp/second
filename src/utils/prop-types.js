import PropTypes from "prop-types"

export const wrapperShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.func,
]);
