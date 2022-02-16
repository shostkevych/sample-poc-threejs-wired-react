import React from 'react'
import './styles.css'
function WelcomePopup(props) {
  return (
    <div className="popup">
      <div className="content p-30">
        <h1 className="title">Minimal threejs fiber react app</h1>
        <p className="mt-10">
          This app connects <strong>React</strong> and <strong>ThreeJS</strong> framework through{' '}
          <strong>React Three Fiber</strong>
        </p>
        <p className="mt-10">
          You can pick materials in <strong>Sidebar</strong>
        </p>
        <p>You can control scene camera using mouse</p>
        <p>
          <strong>zustand</strong> is used for state management
        </p>
        <p>Yes, this is very minimal POC !</p>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => {
              props.onClose && props.onClose()
            }}
          >
            Got it, close !
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePopup
