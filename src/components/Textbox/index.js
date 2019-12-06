import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'

const value = ''

const Textbox = ({name, age}) => (
  <div>
    <label>My Name</label>
    <input type="text" name="name" value={name} />
  </div>
)

export default Textbox
