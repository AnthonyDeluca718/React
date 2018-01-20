import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'
import DecoratedButton from './decoratedButton.jsx';
import ArrayRender from './arrayRender.jsx'

function main() {
  // const element = (
  //   <div>
  //     <Counter text="This is a basic React Counter Example"></Counter>
  //   </div>
  // )

  const element = ( <ArrayRender></ArrayRender> )

  const root = document.getElementById('root')

  ReactDOM.render(
    element,
    root
  )
}

window.addEventListener('DOMContentLoaded', main)
