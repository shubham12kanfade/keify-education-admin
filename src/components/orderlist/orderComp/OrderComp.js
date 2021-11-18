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
import CreateNewOrder from '../../createNewOrder/CreateNewOrder';
import Toggle from '../../../smallComponents/toggle/Toggle';
import './OrderComp.css'
 
const OrderComp = ({ people }) => {

  return (
    <div>
      {people.map((person) => {
        const { id, title, name, status, price, time } = person;
        return (
          <article key={id}>
            <div className = 'order__component'>
              <div className = 'order__right'>
                <h3 className = 'order__title'>{title}</h3>
                <div className = 'order__content'>
                  <p>{name}</p>
                  <p>{status}</p>
                  <p>{price}</p>
                  <p>{time}</p>
                </div>
              </div>
              <div className = 'order__icons'>
                <span><Toggle size = {'30px'} color = {'purple'}/></span>      
                <span><FcRefresh fontSize="25px" color = 'indigo' /></span>
                <span><IoIosCheckboxOutline fontSize="25px" color = 'green' /></span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default OrderComp
