import React from 'react'


class Page extends React.Component {

  constructor(props) {
    super(props)

    this.fetchData = this.fetchData.bind(this)
    this.id = this.id.bind(this)
    this.incrementPage =  this.incrementPage.bind(this)
  }

  id () {
    return this.props.match.params.id
  }

  fetchData (id) {
    console.log(`Fetching Data for id: ${id}`)
  }

  incrementPage () {
    const nextId = parseInt(this.id()) + 1
    this.props.history.push(`/page/${nextId}`)
  }

  componentWillMount () {
    this.fetchData(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    const newId = nextProps.match.params.id

    if(newId !== this.id()) {
      this.fetchData (newId)
    }
  }

  render () {
    return(
      <div>
        {this.id()}

        <div>
          <button onClick={this.incrementPage}>Next Page</button>
        </div>
      </div>
    )
  }
}

export default Page
