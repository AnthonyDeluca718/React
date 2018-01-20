import React from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const name = "Titatnia"
const message = `Hello ${name}!`

class ArrayRender extends React.Component {

  render () {
    return (
      <div>
        <div>{message}</div>
        <div>
          {numbers.map( num => <div>{num}</div> )}
        </div>
      </div>
    )
  }
}

export default ArrayRender
