import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'

function main() {
  const element = (
    <Counter text="This is a basic React Counter Example"></Counter>
  )

  const root = document.getElementById('root')
  console.log(root)

  ReactDOM.render(
    element,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
