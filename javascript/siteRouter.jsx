import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Counter from './counter.jsx'
import Conditional from './conditional.jsx'
import Page from './page.jsx'

const Home = () => <h1>Anthony is back Home!</h1>
const Error = () => <h1>Bad Route!</h1>

const routes = [
  {
    path: '/',
    text: 'Home',
    component: Home,
    header: true
  },
  {
    path: '/conditional',
    text: 'Conditional',
    component: Conditional,
    header: true
  },
  {
    path: '/counter',
    text: 'Counter',
    component: Counter,
    header: true
  },
  {
    path: '/conditional',
    text: 'Conditional',
    component: Conditional,
    header: true
  },
  {
    path: '/page/:id',
    component: Page
  },
  {
    path: '*',
    component: Error
  }
]

const Header = () => {
  const style = {
    marginRight: '16px'
  }

  return (
    <div>
      {routes.filter(route => route.header)
        .map((route, idx) => (
        <Link to={route.path} key={idx} style={style}>{route.text}</Link>
        ))
      }
      <Link to="/page/0" key={-1} style={style}>Page 0</Link>
    </div>
  )
}

//Link tags have to have the Router Component as their parent!

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map((route, idx) => (
            <Route exact path={route.path} component={route.component} key={idx}/>
          ))}
          <Route path="*" component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App
