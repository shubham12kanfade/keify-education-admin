import React, { useState } from 'react';
import './Toggle.css';
import {FaToggleOff} from 'react-icons/fa';
import {FaToggleOn} from 'react-icons/fa';

function Toggle({header, size, color}) {

  const [on, setOn] = useState(false);

  return (
    <div>
      <p className = 'title'>{header}</p>
      {
        on ?
          <FaToggleOn color = {color} fontSize = {size} cursor = 'pointer' onClick = {() => {setOn(!on)}} /> 
        :
          <FaToggleOff color = {color} fontSize = {size} cursor = 'pointer' onClick = {() => {setOn(!on)}} />
      }      
    </div>
  )
}

export default Toggle
