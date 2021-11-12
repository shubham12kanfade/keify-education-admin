import React, { useState } from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RiArrowDropLeftLine} from 'react-icons/ri';
import './Dropdown.css';

function Dropdown({ selected, setSelected, value, defaultValue, header, footer }) {

  const [isActive, setIsActive] = useState(false);
  const options = value;

  return (
    <>
      <h3 className = "heading">{header}</h3>
      <div className="dropdown">
        <div className="dropdown-btn" onClick = {e => setIsActive(!isActive)}>
          {selected ? 
            (<div>{selected}</div>) 
            : 
            <div>{defaultValue}</div>
          }
          {isActive ? 
            <span><RiArrowDropDownLine fontSize = '35px' /></span>
            :
            <span><RiArrowDropLeftLine fontSize = '35px' /></span>        
          }
        </div>
        {isActive && (
          <>  
          <div className="dropdown-content">
            {options.map((option) => {
              return (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }} 
                  className="dropdown-item"
                >          
                  {option}
                </div>
              )
            })}
          </div>
          </>
        )}
        
      </div>
      <p className = 'footer'>{footer}</p>
    </>
  )
}

export default Dropdown
