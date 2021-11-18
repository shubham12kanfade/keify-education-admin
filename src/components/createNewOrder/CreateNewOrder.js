import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './createNewOrder.css';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../smallComponents/button/Button';
import Dropdown from '../../smallComponents/dropdown/Dropdown';
import{AiOutlinePlus} from 'react-icons/ai';
import Input from '../../smallComponents/input/Input';
import Header from '../../smallComponents/header/Header';
// import ZedIndex from '../../ZedIndex';

function CreateNewOrder() {
  
  const [sidebar, setSidebar] = useState(false);
  const [selected, setSelected] = useState('');
  
  const showSidebar = () => {
    setSidebar(!sidebar);
    // <ZedIndex visibility = {sidebar} />
  }

  const value = ['GATE', 'CAT'];

  return (
    <>
      <div style={{ color: '#fff' }}>
        <div className='bars' onClick={showSidebar}>
          <Button text = 'Add' />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <Header title = 'Create a New Order' />
                <AiOutlineClose style = {{color: 'gray'}} onClick={showSidebar} />
              </div>
            </li>
            <div className = 'mainDiv'>
              <Dropdown 
                value = {[]} 
                defaultValue = {'Select a package'}
                header = {'Select Package*'}
              />
              <Dropdown 
                value = {[]} 
                defaultValue = {'Select a branch'}
                header = {'Select Branch*'}
              />
              <Dropdown 
                value = {[]} 
                defaultValue = {'Select a subject'}
                header = {'Select Subject*'}
                footer = {'Leave it untouch for brunch level purchase'}
              />
              <Dropdown 
                value = {[]} 
                defaultValue = {'Course Type*'}
                header = {'Course Type'}
              />
              <Dropdown 
                value = {[]} 
                defaultValue = {'Subscription'}
                header = {'Subscription'}
              />
              <Dropdown 
                selected = {selected} 
                setSelected = {setSelected} 
                value = {value} 
                defaultValue = {'Select a coupon'}
                header = {'Select Coupon'}
                footer = {'Note: This will work for active days and assigning coupon only'}
              />
              <div className = 'input__sm__div'>
                <Input 
                  type = {'select'} 
                  placeholder = {'Search here'} 
                  width = {'95%'} 
                  header = {'Select User*'}
                  footer = {'Type and select from list'}
                />
                <Input 
                  type = {'number'} 
                  placeholder = {'Enter amount'} 
                  width = {'95%'} 
                  header = {'Enter Amount*'}
                />
              </div>
              
              <div className = 'botton__group' >
                <Button cancel text = 'Cancel' />
                <Button text = 'Submit' />
              </div>
            </div>            
          </ul>
        </nav>
      </div>
    </>
    
  );
}

export default CreateNewOrder;


