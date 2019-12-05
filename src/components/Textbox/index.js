import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'

const value = ''

const Textbox = () => (
  <div>
    <label>My Name</label>
    <input type="text" name="name" value={value} />
  </div>
)

export default Textbox
