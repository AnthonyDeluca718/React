import React from 'react'
import { Link } from 'react-router-dom'

const routes = [
  {
    path: '/counter',
    text: 'Counter'
  },
  {
    path: '/conditional',
    text: 'Conditional'
  },
  {
    path: '/lifecycles',
    text: 'Life Cycle Methods'
  }
]

const Header = () => {
  return (
    <div>
      {routes.map(route => (
        <Link to={route.path}>{route.text}</Link>
      ))}
    </div>
  )
}

export default Header
