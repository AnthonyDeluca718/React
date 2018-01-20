import React from 'react'

class DecoratedButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {

    return(
      <div>
        <div>
          {this.props.text}
        </div>

        <button onClick={() => this.props.callback() }>
          {this.props.buttonText}
        </button>
      </div>
    )
  }
}

export default DecoratedButton
