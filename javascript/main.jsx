import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'

function main() {
  const element = (
    <div>
      <div>Yolo We got multiple elements</div>
      <Counter text="This is a basic React Counter Example"></Counter>
    </div>
  )

  const root = document.getElementById('root')

  ReactDOM.render(
    element,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
