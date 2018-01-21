import React from 'react'

const Stateless = ({firstName, lastName}) => {
  const string = `Hello ${firstName} ${lastName}!`
  
  return (
    <div>
      { string }
    </div>
  )
}

export default Stateless
