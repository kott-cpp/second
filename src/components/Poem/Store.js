import React from 'react'

const CTX = React.createContext()
export { CTX }

function Store(props) {
  const stateHook = React.useState({ color: 'red' })
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}

export default Store
