import React, { useContext } from 'react'
import PoemWithReducerApp from './PoemWithReducerApp'
import { CTX } from './StorePoemWithReducer'

export default function PoemWithReducer() {
  const [appState, doAction] = React.useContext(CTX)

  return (
    <div>
      <button
        onClick={() => doAction({ type: 'UPDATE_COLOR', payload: 'blue' })}
      >
        Blue
      </button>
      <button
        onClick={() => doAction({ type: 'UPDATE_COLOR', payload: 'green' })}
      >
        Green
      </button>
      <button
        onClick={() => doAction({ type: 'UPDATE_COLOR', payload: 'red' })}
      >
        Red
      </button>
      Roses are {appState.color}, violets are {appState.color};
    </div>
  )
}
