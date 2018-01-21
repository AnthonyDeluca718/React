import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'
import DecoratedButton from './decoratedButton.jsx'
import ArrayRender from './arrayRender.jsx'
import Stateless from './stateless.jsx'

function main() {
  const element = <Counter text="Time to lear about destructuring and stateless components!"></Counter>
  // const element = <Stateless firstName="Titania" lastName="Freyja"></Stateless>

  const root = document.getElementById('root')

  ReactDOM.render(
    element,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
