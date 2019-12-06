import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { wrapperShape } from '../../utils/prop-types'

const setupIcons = () => {
  library.add(faCheck, faTimes)
}
setupIcons()

const Badge = ({ className, label, children, theme, size, icon, Bdg }) => (
  <Bdg className={cx( styles.badge, styles[size], themes[theme], className)}>
    {children || label}
    {icon && <Icon icon={icon} />}
  </Bdg>
)

Badge.propTypes = {
  Bdg: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
}
Badge.defaultProps = {
  Bdg: 'span',
  theme: 'default',
  size: 'medium',
}

export default Badge
