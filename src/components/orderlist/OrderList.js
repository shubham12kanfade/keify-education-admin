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
// import './createNewOrder.css';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropdown from '../../smallComponents/dropdown/Dropdown';
import Input from '../../smallComponents/input/Input';
import Header from '../../smallComponents/header/Header';

const OrderList = () => {

    const [people, setPeople] = useState(orderData);
    const [modelVisible, setModelVisible] = useState(false);

    return (
        <div className = 'orderlist'>
            <div className = 'orderlist__top'>
                <div className = 'orderlist__top__left'>
                    <span><AiOutlineVideoCamera  fontSize = '20px' /></span>
                    <p>Orders</p>
                </div>
                <div className = 'orderlist__top__right'> 
                    <span><AiOutlineFilter fontSize = '25px' /></span>
                    <input 
                        type = 'text' 
                        name = 'orders' 
                        placeholder = 'Search Orders' 
                    />
                    <div className = 'button'><Button text = 'Export' /></div>
                    <CreateNewOrder />
                </div>                
            </div>
            <div className = 'orderlist__content'>
                <OrderComp  people={people} />
            </div>
        </div>
    )
    
}

export default OrderList;