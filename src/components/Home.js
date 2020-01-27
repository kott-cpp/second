import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// toast.configure() //(remove ToastContainer from import and div to use this)

const Home = () => {
  const notifyA = () =>
    toast('This is on the Bottom-Left corner', { containerId: 'A' })
  const notifyB = () =>
    toast('This is on the Top-Right corner', { containerId: 'B' })
  const notifyC = () => toast('Button was clicked!', { containerId: 'C' })

  return (
    <div>
      <div>
        <p>Home</p>
      </div>
      <div>
        <span className="fab fa-facebook-f">
        </span>
      </div>
      <div>
        <ToastContainer
          enableMultiContainer
          containerId={'C'}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
        <button onClick={notifyC}>What does this do?</button>
      </div>
      <div>
        <ToastContainer
          enableMultiContainer
          containerId={'A'}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'B'}
          position={toast.POSITION.TOP_RIGHT}
        />

        <button onClick={notifyA}>Notify A</button>
        <button onClick={notifyB}>Notify B</button>
      </div>
    </div>
  )
}

export default Home
