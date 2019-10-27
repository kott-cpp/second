import React, { useContext } from 'react'
import PoemApp from './PoemApp'
import { CTX } from './Store'

export default function Poem() {
  const [appState, updateState] = React.useContext(CTX)

  return (
    <div>
      <button onClick={() => updateState({ color: 'blue' })}>Click me</button>
      Roses are {appState.color}, violets are {appState.color};
    </div>
  )
}
