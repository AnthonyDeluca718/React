import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'
import App from './router.jsx'

function main() {
  const root = document.getElementById('root')

  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
