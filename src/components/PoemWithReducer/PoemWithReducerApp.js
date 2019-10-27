import React from 'react'
import './poemWithReducer.css'
import PoemWithReducer from './PoemWithReducer'
import StorePoemWithReducer from './StorePoemWithReducer'

function PoemWithReducerApp() {
  return (
    <StorePoemWithReducer>
      <div className={'poem'}>
        <header className={'App-header'}>
          <PoemWithReducer />
        </header>
      </div>
    </StorePoemWithReducer>
  )
}

export default PoemWithReducerApp
