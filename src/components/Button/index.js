import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import './themes.css'
import { wrapperShape } from '../../utils/prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faAngleDown } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const setupIcons = () => {
  library.add(faCheck, faTimes, faAngleDown)
}
setupIcons()

const Button = ({ className, label, children, theme, Btn, size, icon }) => (
  <Btn className={cx(className, 'button', size, theme)}>
    <span className={'pr1'}> {children || label} </span>
    {icon && <Icon icon={icon} />}
  </Btn>
)

Button.propTypes = {
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
}
Button.defaultProps = {
  theme: 'badgeDefault',
  Btn: 'button',
  size: 'buttonMedium',
  icon: 'check',
}

export default Button
