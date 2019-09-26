import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import './themes.css'
import { wrapperShape } from '../../utils/prop-types'

const Badge = ({ className, label, children, theme, Btn, size, }) => (
  <Btn className={cx(className, 'badge', size, theme)}>
    {children || label}
  </Btn>
)

Badge.propTypes = {
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
}
Badge.defaultProps = {
  theme: 'default',
  Btn: 'badge',
  size: 'medium',
}

export default Badge
