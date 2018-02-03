import React from 'react'

import DecoratedButton from './decoratedButton.jsx';

const numbers = [1, 2, 3, 4, 5, 6, 7];

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
    this.addToCount = this.addToCount.bind(this)
  }

  decrementCounter() {
      this.setState({
        count: this.state.count - 1
      })
  }

  incrementCounter() {
      this.setState({
        count: this.state.count + 1
      })
  }

  addToCount (val) {
    this.setState({
      count: this.state.count + val
    })
  }

  componentWillMount () {
    console.log('Counter Component Mounted')
  }

  componentWillUnmount () {
    console.log(`Unmounting. Final Value: ${this.state.count}`)
  }

  buttons () {
    const buttons = numbers.map(num => {
      const text = `I increase things by ${num}`
      const buttonText = `plus ${num}`
      const callback = () => this.addToCount(num)

      return (
        <DecoratedButton
          text={text} buttonText={buttonText}
          callback={ callback }
          key = {num}
        ></DecoratedButton>
      )
    })

    return buttons
  }

  render () {
    return(
      <div>

        <div>{this.props.text}</div>

        <div>
          Count: {this.state.count}
        </div>

        <div>
          {this.buttons()}
        </div>
      </div>
    )
  }
}

export default Counter
