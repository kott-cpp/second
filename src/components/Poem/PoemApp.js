import React from 'react'
import './poem.css'
import Poem from './Poem'
import Store from './Store'

function PoemApp() {
  return (
    <Store>
      <div className={'poem'}>
        <header className={'App-header'}>
          <Poem />
        </header>
      </div>
    </Store>
  )
}

export default PoemApp
