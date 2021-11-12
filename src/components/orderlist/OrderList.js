import React from 'react';
import{FiShoppingCart} from 'react-icons/fi'
import{FiFilter} from 'react-icons/fi'
import{BsPerson} from 'react-icons/bs'
import{MdOutlinePending} from 'react-icons/md'
import{HiOutlineCurrencyDollar} from 'react-icons/hi'
import{BiTimeFive} from 'react-icons/bi'
import{IoIosCheckboxOutline} from 'react-icons/io'
import{FcRefresh} from 'react-icons/fc'
import{AiOutlinePlus} from 'react-icons/ai';
import{AiOutlineVideoCamera} from 'react-icons/ai';
import {AiOutlineFilter} from 'react-icons/ai';
import { useState } from 'react';
import CreateNewOrder from '../createNewOrder/CreateNewOrder';
import OrderComp from './orderComp/OrderComp';
import { orderData } from '../../data/orderData';
import Button from '../../smallComponents/button/Button';
import './OrderList.css';


const OrderList = () => {

    const [people, setPeople] = useState(orderData);
    const [modelVisible, setModelVisible] = useState(false);

    const handleModalOpen = () => {
        setModelVisible(!modelVisible);
    }

    return (
        <div className = 'orderlist'>
            <div className = 'orderlist__top'>
                <div style = {{color: 'black', marginTop: '10px', marginRight: '500px', fontSize : '25px'}}>
                    <AiOutlineVideoCamera  fontSize = '20px' />
                    Orders
                </div>
                <span style = {{margin : '18px'}}><AiOutlineFilter fontSize = '25px' /></span>
                <input 
                    type = 'text' 
                    name = 'orders' 
                    placeholder = 'Search Orders' 
                    style = {{
                        marginTop: '13px',
                        height: '30px',
                        width: '200px',
                        paddingLeft: '10px',
                        outline: 'none',
                        boxShadow: '0px 4px 4px -2px rgba(0, 0, 0, 0.24)',
                    }} 
                />
                <span style = {{height: '10px'}}><Button text = 'Export' /></span>
                {/* <span onClick={handleModalOpen}><Button text = 'Add' /></span> */}
                <CreateNewOrder />
            </div>
            <div className = 'orderlist__content'>
                <OrderComp  people={people} />
            </div>
        </div>
    )
    
}

export default OrderList;