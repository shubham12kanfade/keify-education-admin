import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './createNewTest.css';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../smallComponents/button/Button';
import Dropdown from '../../smallComponents/dropdown/Dropdown';
import Input from '../../smallComponents/input/Input';
import Header from '../../smallComponents/header/Header';
import TextEditor from '../../smallComponents/editor/TextEditor';
import Toggle from '../../smallComponents/toggle/Toggle';

function CreateNewTest() {
  const [sidebar, setSidebar] = useState(false);
  const [selected, setSelected] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  const [text, setText] = useState("");
  const [text_2, setText_2] = useState("");

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
                <span style = {{
                  position: 'relative',
                  right: '10px',
                }}>
                  <Header title = {'Create a New Test'} />  
                </span>
                <AiOutlineClose style = {{color: '#333'}} onClick={showSidebar} />
              </div>
            </li>

            <div className = 'mainDiv'>
              <Input 
                type = {'name'} 
                placeholder = {'Enter a name'} 
                width = {'98%'} 
                header = {'Name*'}
              />

              <TextEditor heading = {'General Instruction'} />

              <TextEditor heading = {'Paper Instruction'} />

              <span style = {{margin: '10px'}}>
                <Toggle 
                  header = {'For MMT'} 
                  size = {'40px'} 
                  color = {'gray'} 
                />
              </span>

              <div style = {{display: 'flex'}}>
                <div style = {{width: '50%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {'Exam Type'}
                    header = {'Exam Type*'}
                    footer = {''}
                  />
                </div>

                <Input 
                  type = {"time"} 
                  placeholder = {'Select time'} 
                  width = {"50%"} 
                  header = {'Completion time'} 
                />
              </div>

              <div style={{display: 'flex'}}>
                <div style = {{width: '50%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {'Test Type'}
                    header = {'Test Type*'}
                    footer = {''}
                  />
                </div>
                <div style = {{width: '50%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {'Select a Branch'}
                    header = {'Select Branch*'}
                    footer = {''}
                  />
                </div>
              </div>

              <span style = {{margin: '10px'}}>
                <Toggle 
                  header = {'For free users?'} 
                  size = {'40px'} 
                  color = {'gray'} 
                />
              </span>

              <DragUpload 
                width =  {'77vw'} 
                text = {'Image'} 
                subtext = {'*Select only jpeg, jpg, png, webp files'}
              />

              <div style = {{display: 'flex', marginLeft: '670px'}}>
                <Button text = {'Cancel'} cancel />
                <Button text = {'Submit and Add Question'} />
                <Button text = {'Submit'} />
              </div>

            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CreateNewTest;


