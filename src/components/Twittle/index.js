import React from 'react'
import styles from './style.css'
import cx from 'classnames'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCog, faSync, faSpinner, faHurricane  } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const setupIcons = () => {
  library.add(faCircleNotch, faCog, faSync, faSpinner, faHurricane )
}
setupIcons()

const Twittle = () => (
  <article>
    <header>
      <div className={'headerLeft'}>Title of page</div>
      <div className={'headerRight'}>wow</div>
    </header>
    <section>hello</section>
  </article>
)

export default Twittle
