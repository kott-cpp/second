import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import './themes.css'
import { wrapperShape } from '../../utils/prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCog, faSync, faSpinner, faHurricane  } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const setupIcons = () => {
  library.add(faCircleNotch, faCog, faSync, faSpinner, faHurricane )
}
setupIcons()

const AnimatedButton = ({ className, label, children, theme, Btn, size, icon }) => (
  <Btn className={cx(className, 'button', size, theme)}>
    {children || label}
    {icon && <Icon icon={icon} />}
  </Btn>
)

AnimatedButton.propTypes = {
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
}
AnimatedButton.defaultProps = {
  theme: 'default',
  Btn: 'button',
  size: 'medium',
}

export default AnimatedButton