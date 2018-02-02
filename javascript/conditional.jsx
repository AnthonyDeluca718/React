import React from 'react'

class Conditional extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen () {
    this.setState({
      open: !this.state.open
    })
  }

  render() {

    return (
      <div>
        {this.state.open
          ?
          <div>Open</div>
          :
          <div>Not Open</div>
        }

        <button onClick={this.toggleOpen}>Toggle</button>

        {this.state.open
          &&
          <div>We are open for business baby</div>
        }
      </div>
    )
  }
}

export default Conditional
