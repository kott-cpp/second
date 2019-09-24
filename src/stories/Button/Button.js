import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './styles.css'
import Button from '../../../src/components/Button'

const buttonThemes = ['default', 'info', 'success', 'warning', 'danger',]
const buttonSizes = ['small', 'medium', 'large', 'extraLarge',]

const ButtonStory = ({ className }) => (
  <div className={cx(className, 'button')}>
    <ul>
      {buttonSizes.map((size, idx) => (
        <React.Fragment key={`buttonStory-button-size-${size}`}>
          {buttonThemes.map(theme => (
            <li
              key={`buttonStory-button-sizes-${size}-${theme}`}
              className={'buttonRow'}
            >
              <Button label={theme} theme={theme} size={size} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </div>
)

ButtonStory.propTypes = {
  className: PropTypes.string,
}

export default ButtonStory