import React from 'react'

function Button({ cancel, text }) {
  return (
    <>
      {cancel ? (
          <input 
            type="button" 
            value={text} 
            style = {{
              backgroundColor: 'white',
              border: '1px solid #4B0082',
              borderRadius: '5px',
              color: '#4B0082',
              padding: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              margin: '10px',
              cursor: 'pointer',
            }}  
          />
        ) : (
          <input 
            type="button" 
            value={text} 
            style = {{
              backgroundColor: '#4B0082',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              padding: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              margin: '10px',
              cursor: 'pointer',
            }}  
          />
        )
      }
    </>
  )
}

export default Button
