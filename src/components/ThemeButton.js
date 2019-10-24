import React, { useContext } from 'react'
import style from './centered.css'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext(themes.dark)

function ThemeButton() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <div className={'centered'}>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}

export default ThemeButton
