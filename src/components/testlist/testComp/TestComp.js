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
import './TestComp.css';
import { Link } from 'react-router-dom';
import EditTest from '../../editTest/EditTest';
import Questions from '../../questions/Questions';

const TestComp = ({ test }) => {

  
  const { _id, name, status } = test;

  // function deleteUser(_id){
  //    fetch(`http://localhost:4000/api/v1/subscription/delete/id/${_id}`,{
  //      method:'DELETE'
  //    }).then((result)=>{
  //      result.json().then((resp)=>{
  //        console.warn(resp)
  //      })
  //    })
     
  //         //  alert(_id)
  // }

  return (
    <article key={_id}>
      {
        console.log('test is here: ', test)
      } 
      <div className = 'test__component'>
        <div className = 'e-icon-div'>
          <p className = 'e-icon'>E</p>
        </div>
        <div className = 'test__right'>
          <h3 className = 'test__title'>{name}</h3>
          <div className = 'test__content'>
            <AiOutlineClockCircle />
            <span style = {{margin: '0px 10px', color: 'gray'}}>|</span>
            <AiOutlineQuestionCircle />
            <p>{status} Questions</p>
          </div>
        </div>
        <span className="btn_question"><Questions/></span>
        <div className = 'test__icons'>
          
          {/* <input 
            type = "button" 
            value = '+ Question'
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
          /> */}
          {/* <span> <AiOutlineEdit fontSize="25px" color = 'green' /></span> */}
          <span><EditTest/></span>
          <span><Toggle size = {'30px'} color = {'purple'}/></span>      
          <span><BsPeople fontSize="25px" color = 'blue' /></span>
          <span><AiOutlineFilePdf fontSize="25px" color = 'blue' /></span>
          {/* <button onClick={()=>deleteUser(test._id)}>Delete</button> */}
          <span><AiOutlineDelete fontSize="25px" color = 'red' /></span>
        </div>
      </div>
    </article>
  )
}

export default TestComp
