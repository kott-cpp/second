import React from 'react'
import cx from 'classnames'
import './styles.css'
import PropTypes from 'prop-types'

const HamburgerStory = ({ className }) => (
  <section className={cx(className)}>
    <div className={cx('icon')}>
      <div className={cx('hamburger')}>

      </div>
    </div>
  </section>
)

HamburgerStory.propTypes = {
  className: PropTypes.string,
}
export default HamburgerStory