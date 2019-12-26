import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'

// toast.configure() //(remove ToastContainer from import and div to use this)

const ToastStory = ({ className }) => {
  const notifyTl = () =>
    toast.success('Top-Left Success', { containerId: 'tl' })
  const notifyTc = () => toast.error('Top-Center Danger', { containerId: 'tc' })
  const notifyBr = () =>
    toast.warn('Bottom-Right Warning', { containerId: 'br' })
  const notifyTr = () => toast.info('Top-Right Info', { containerId: 'tr' })
  const notifyBc = () =>
    toast('This is on the Bottom-Center', { containerId: 'bc' })
  const notifyBl = () =>
    toast('This is on the Bottom-Left', { containerId: 'bl' })

  return (
    <div className={cx(className, 'toast', 'toastRow')}>
      <div>
        <ToastContainer
          enableMultiContainer
          containerId={'tl'}
          position={toast.POSITION.TOP_LEFT}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'tc'}
          position={toast.POSITION.TOP_CENTER}
          className={'danger'}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'tr'}
          position={toast.POSITION.TOP_RIGHT}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'br'}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'bc'}
          position={toast.POSITION.BOTTOM_CENTER}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'bl'}
          position={toast.POSITION.BOTTOM_LEFT}
        />

        <button
          onClick={notifyTl}
          className={cx('button medium success toastSpacing')}
        >
          Top Left
        </button>
        <button
          onClick={notifyTc}
          className={cx('button medium danger toastSpacing')}
        >
          Top Center
        </button>
        <button
          onClick={notifyTr}
          className={cx('button medium info toastSpacing')}
        >
          Top Right
        </button>
        <button
          onClick={notifyBr}
          className={cx('button medium warning toastSpacing')}
        >
          Bottom Right
        </button>
        <button
          onClick={notifyBc}
          className={cx('button medium success toastSpacing')}
        >
          Bottom Center
        </button>
        <button
          onClick={notifyBl}
          className={cx('button medium warning toastSpacing')}
        >
          Bottom Left
        </button>
      </div>
    </div>
  )
}

ToastStory.propTypes = {
  className: PropTypes.string,
}

export default ToastStory
