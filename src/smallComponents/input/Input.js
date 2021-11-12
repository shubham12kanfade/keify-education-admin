import React from 'react';
import './Input.css';

function Input({type, placeholder, width, header, footer}) {
  return (
    <div style = {{width: width}}>
      <h3 className = "heading">{header}</h3>
      <input 
        // className = 'input' 
        type = {type} 
        placeholder = {placeholder} 
        style = {{
          width: width,
          color: '#333',
          marginLeft: '10px',
          fontSize: '20px',
          paddingLeft: '10px',
          height: '50px',
          backgroundColor: 'transparent',
          outline: 'none',
          outlineWidth: '0',
          border: '1.5px solid lightgray',
          borderRadius : '5px',
          boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
        }}
      />
      <p className = 'footer'>{footer}</p>
    </div>
  )
}

export default Input
