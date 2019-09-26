import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import './themes.css'

const Badge = ({ className, label, children, theme, size, }) => (
  <span className={cx(className, 'badge', size, theme)}>
    {children || label}
  </span>
)

Badge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
}
Badge.defaultProps = {
  theme: 'default',
  size: 'medium',
}

export default Badge
