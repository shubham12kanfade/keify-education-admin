import { useState } from 'react';
import {FaToggleOff} from 'react-icons/fa';
import {FaToggleOn} from 'react-icons/fa';
import{FiShoppingCart} from 'react-icons/fi'
import{FiFilter} from 'react-icons/fi'
import{BsPerson} from 'react-icons/bs'
import{MdOutlinePending} from 'react-icons/md'
import{HiOutlineCurrencyDollar} from 'react-icons/hi'
import{BiTimeFive} from 'react-icons/bi'
import{IoIosCheckboxOutline} from 'react-icons/io'
import{FcRefresh} from 'react-icons/fc'
import{AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsPeople} from 'react-icons/bs';
import {AiOutlineFilePdf} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import CreateNewOrder from '../../createNewOrder/CreateNewOrder';
import Toggle from '../../../smallComponents/toggle/Toggle';
import './TestComp.css'

const TestComp = ({ tests }) => {

  const btnValue = () => {
    return (
      <div>
        <AiOutlinePlus />Question
      </div>
    )
  }

  return (
    <div>
      {tests.map((test) => {
        const { id, title, questions } = test;
        return (
          <article key={id}>
            <div className = 'test__component'>
              <div className = 'e-icon-div'>
                <p className = 'e-icon'>E</p>
              </div>
              <div className = 'test__right'>
                <h3 className = 'test__title'>{title}</h3>
                <div className = 'test__content'>
                  <AiOutlineClockCircle />
                  <span style = {{margin: '0px 10px', color: 'gray'}}>|</span>
                  <AiOutlineQuestionCircle />
                  <p>{questions} Questions</p>
                </div>
              </div>
              <div className = 'test__icons'>
                <input 
                  type = "button" 
                  value = 'Question'
                  style = {{
                    backgroundColor: 'purple',
                    border: '1px solid #4B0082',
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
                <span><AiOutlineEdit fontSize="25px" color = 'green' /></span>
                <span><Toggle size = {'30px'} color = {'purple'}/></span>      
                <span><BsPeople fontSize="25px" color = 'blue' /></span>
                <span><AiOutlineFilePdf fontSize="25px" color = 'blue' /></span>
                <span><AiOutlineDelete fontSize="25px" color = 'red' /></span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default TestComp
