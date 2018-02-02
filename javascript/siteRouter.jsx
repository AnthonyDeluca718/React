import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Counter from './counter.jsx'

const Home = () => <h1>Anthony is back Home!</h1>
const Error = () => <h1>Bad Route!</h1>

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/counter" component={Counter}/>
        <Route path="*" component={Error}/>
      </Switch>
    )
  }
}

export default App
