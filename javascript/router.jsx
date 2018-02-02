import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = () => <h1>Hello Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const Error = () => <h1>Bad Route Homie</h1>

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/address" component={Address}/>
        <Route path="*" component={Error}/>
      </Switch>
    )
  }
}

export default App
