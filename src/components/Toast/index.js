import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
  const notifyA = () =>
    toast('This is on the Bottom-Left corner', { containerId: 'A' })
}

export default Toast