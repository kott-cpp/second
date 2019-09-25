import cx from 'classnames'
import PropTypes from 'pro-types'
import React from 'react'
import './styles.css'
import Badge from '../../../src/components/Badge'

const badgeThemes = ['default', 'info',]
const badgeSizes = ['small', 'medium', 'large', 'extraLarge',]

const BadgeStory = ({ className }) => (
  <div className={cx(className, 'badge')}>
    <ul>
      {badgeSizes.map((size, idx) => (
        <React.Fragment key={`badgeStory-badge-size-${size}`}>
          {badgeThemes.map(theme => (
            <li
              key={`badgeStory-badge-sizes-${size}-${theme}`}
              className={`badgeRow`}
            >
              <Badge label={theme} theme={theme} size={size} />
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