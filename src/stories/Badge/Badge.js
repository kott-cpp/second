import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Badge from '../../../src/components/Badge'

const badgeThemes = ['default', 'info', 'success', 'warning', 'danger']
const badgeSizes = ['small', 'medium', 'large', 'extraLarge']

const BadgeStory = ({ className }) => (
  <div className={cx(className, styles.badge)}>
    <ul>
      {badgeSizes.map((size, idx) => (
        <React.Fragment key={`badgeStory-badge-size-${size}`}>
          {badgeThemes.map(theme => (
            // TODO add badge icon here
            <li
              key={`badgeStory-badges-size-${size}-${theme}`}
              className={'badgeRow'}
            >
              <Badge label={'50+'} theme={theme} size={size} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </div>
)

BadgeStory.propTypes = {
  className: PropTypes.string,
}

export default BadgeStory
