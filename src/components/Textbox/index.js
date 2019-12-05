import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'

const Textbox = () => (
  <div>
    <label>My Name</label>
    <input
      type='text'
      name='name'
      value='Kevin'/>
  </div>
)

export default Textbox