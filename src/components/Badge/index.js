import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const setupIcons = () => {
  library.add(faCheck, faTimes)
}
setupIcons()

const Badge = ({ className, label, children, theme, size, icon }) => (
  <span className={cx(className, styles.badge, styles[size], themes[theme])}>
    {children || label}
    {icon && <Icon icon={icon} />}
  </span>
)

Badge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
}
Badge.defaultProps = {
  theme: 'badgeDefault',
  size: 'badgeMedium',
}

export default Badge
