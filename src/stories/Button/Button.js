import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Button from '../../../src/components/Button'

const buttonThemes = ['default', 'info', 'success', 'warning', 'danger']
const buttonSizes = ['small', 'medium', 'large', 'extraLarge']
const buttonIcons = ['circle-notch', 'cog', 'sync', 'spinner', 'hurricane']

const ButtonStory = ({ className }) => (
  <div className={cx(className, styles.button)}>
    <ul>
      {buttonSizes.map((size, idx) =>
        buttonThemes.map(theme =>
          buttonIcons.map(icon => (
            <li
              key={`buttonStory-button-sizes-icon-${size}-${theme}-${icon}`}
              className={'buttonRow'}
            >
              <Button label={theme} icon={icon} theme={theme} size={size} />
            </li>
          )),
        ),
      )}
    </ul>
  </div>
)

ButtonStory.propTypes = {
  className: PropTypes.string,
}

export default ButtonStory
