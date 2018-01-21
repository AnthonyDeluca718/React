import React from 'react'

const DecoratedButton = ({text, buttonText, callback}) => {
  return(
    <div>
      <div>
        {text}
      </div>

      <button onClick={() => callback() }>
        {buttonText}
      </button>
    </div>
  )
}

export default DecoratedButton
