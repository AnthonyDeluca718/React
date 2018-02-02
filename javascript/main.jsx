import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import SiteRouter from './siteRouter.jsx'

function main() {
  const root = document.getElementById('root')

  ReactDOM.render(
    <HashRouter>
      <SiteRouter />
    </HashRouter>,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
