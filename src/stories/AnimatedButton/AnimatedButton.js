import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './styles.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faCircleNotch,
  faCog,
  faSync,
  faSpinner,
  faSpinnerThird,
  faHurricane,
} from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import AnimatedButton from '../../components/AnimatedButton'

const setupIcons = () => {
  library.add(
    faCircleNotch,
    faCog,
    faSync,
    faSpinner,
    faSpinnerThird,
    faHurricane,
  )
}
setupIcons()

const AnimatedButtonStory = ({ className }) => {


  return (
    <div className={cx(className, 'animatedButton')}>
      <button className={cx('info', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'circle-notch'} spin />
      </button>
      <button className={cx('success', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'hurricane'} spin />
      </button>
      <button className={cx('danger', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'sync'} className={cx('spinner')} />
      </button>
      <button className={cx('warning', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'spinner'} className={cx('spinner')} />
      </button>
      <button className={cx('info', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'cog'} className={cx('spinner')} />
      </button>
      <button className={cx('info', 'button')}>
        <span className={'pr1'}>Loading...</span>
        <Icon icon={'spinner-third'} className={cx('spinner')} />
      </button>
    </div>
  )
}

AnimatedButtonStory.propTypes = {
  className: PropTypes.string,
}

export default AnimatedButtonStory
