import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../button.module.css'

const Navigation = () => {
  return (
    <div>
      <Link to="/" className={styles.button}>
        Home
      </Link>
      <Link to="/about" className={styles.button}>
        About
      </Link>
      <Link to="/contact" className={styles.button}>
        Contact
      </Link>
    </div>
  )
}

export default Navigation
