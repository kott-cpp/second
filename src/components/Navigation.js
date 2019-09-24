import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Navigation = () => {
  return (
    <div>
      <Link to="/" className={'button'}>
        Home
      </Link>
      <Link to="/pilot" className={'button'}>
        Pilot
      </Link>
      <Link to="/films" className={'button'}>
        Films
      </Link>
      <Link to="/about" className={'button'}>
        About
      </Link>
      <Link to="/contact" className={'button'}>
        Contact
      </Link>
    </div>
  )
}

export default Navigation
