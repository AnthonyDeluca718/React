import React from 'react'

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter(val) {
    this.setState({
      count: this.state.count + val
    })
  }

  render () {
    return(
      <div>

        <div>{this.props.text}</div>

        <div>
          Count: {this.state.count}
        </div>

        <button onClick={() => this.incrementCounter(1)}>
          Plus One
        </button>

        <button onClick={() => this.incrementCounter(-1)}>
          Minus One
        </button>
      </div>
    )
  }
}

export default Counter
