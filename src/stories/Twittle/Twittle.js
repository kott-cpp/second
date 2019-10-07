import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './styles.css'
import Twittle from '../../../src/components/Twittle'

const TwittleStory = ({ className }) => (
  <div className={cx(className)}>
    <Twittle icon={'angle-down'}/>
  </div>
)

TwittleStory.propTypes = {
  classname: PropTypes.string,
}

export default TwittleStory