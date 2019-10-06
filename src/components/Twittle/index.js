import React, { useState } from 'react'
import styles from './style.css'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const setupIcons = () => {
  library.add(faAngleDown, faAngleUp)
}
setupIcons()

const Twittle = ({ className, icon }) => {
  const [toggled, toggle] = useState(false)
  return (
    <React.Fragment>
      <article>
        <header>
          <div className={cx(className, 'headerLeft')}>Title of page</div>
          <span className={cx(className, 'headerRight')} onClick={() => (toggled => !toggled)}>wow</span>
        </header>
        <section>{toggled && <React.Fragment>hello</React.Fragment>}</section>
      </article>
    </React.Fragment>
  )
}

Twittle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
}

export default Twittle
