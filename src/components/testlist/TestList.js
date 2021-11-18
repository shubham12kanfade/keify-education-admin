import React from 'react';
import{FiShoppingCart} from 'react-icons/fi'
import{FiFilter} from 'react-icons/fi'
import{BsPerson} from 'react-icons/bs'
import{MdOutlinePending} from 'react-icons/md'
import{HiOutlineCurrencyDollar} from 'react-icons/hi'
import{BiTimeFive} from 'react-icons/bi'
import{IoIosCheckboxOutline} from 'react-icons/io'
import{FcRefresh} from 'react-icons/fc'
import{AiOutlinePlus} from 'react-icons/ai'
import{AiOutlineVideoCamera} from 'react-icons/ai';
import {AiOutlineFilter} from 'react-icons/ai';
import { useState } from 'react';
import CreateNewTest from '../createNewTest/CreateNewTest';
import TestComp from './testComp/TestComp';
import { testData } from '../../data/testData';
import Button from '../../smallComponents/button/Button';
import './TestList.css';
import { useEffect } from 'react';


const TestList = () => {

    // const [tests, setTests] = useState(testData);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const url = 'http://3.6.132.160:4000/api/v1/test/getAll';
        fetch(url).then(res => res.json())
        .then(res => setTests(res.data));
    }, []);

    return (
        <div className = 'orderlist'>
            <div className = 'testlist__top'>
                <div style = {{color: 'black', marginTop: '10px', marginRight: '600px', marginLeft: '20px', fontSize : '25px'}}>
                    <AiOutlineVideoCamera  fontSize = '20px' />
                    TEST
                </div>
                <span style = {{margin : '18px'}}><AiOutlineFilter fontSize = '25px' /></span>
                <input 
                    type = 'text' 
                    name = 'videos' 
                    placeholder = 'Search Videos' 
                    style = {{
                        marginTop: '13px',
                        height: '30px',
                        width: '200px',
                        paddingLeft: '10px',
                        outline: 'none',
                        boxShadow: '0px 4px 4px -2px rgba(0, 0, 0, 0.24)',
                    }} 
                />
                <CreateNewTest />
            </div>
            <div className = 'orderlist__con'>
                {/* <TestComp  tests={tests} /> */}
                {
                    tests.map(test => (
                        <TestComp  test={test} />
                        // console.log('this is test', test)
                    ))
                }
            </div>
        </div>
    )
    
}

export default TestList;