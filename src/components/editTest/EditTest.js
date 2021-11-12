import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './EditTest.css';
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

const t = '    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


const t2 = '    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function EditTest() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [text, setText] = useState(t);
  const [text_2, setText_2] = useState(t2);

  
  return (
    <>
      <div style={{ color: '#fff' }}>
        <div className='bars' onClick={showSidebar}>
          <Button text = 'edit test' />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <span style = {{
                  position: 'relative',
                  right: '100px',
                }}>
                  <Header title = {'Edit Test'} />
                </span>
                <AiOutlineClose style = {{color: '#333'}} onClick={showSidebar} />
              </div>
            </li>

            <div className = 'mainDiv'>
              <Input 
                type = {'name'} 
                placeholder = {'Tenses(Advance)'} 
                width = {'98%'} 
                header = {'Name*'}
              />

              <Input 
                type = {'name'} 
                placeholder = {'tensesadvance'} 
                width = {'98%'} 
                header = {'Slug'}
              />

              <TextEditor 
                heading = {'General Instruction'} 
                content = {t}
              />

              <TextEditor 
                heading = {'Paper Instruction'} 
                content = {t2}
              />

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
              </div>

              <div style={{display: 'flex'}}>
                <div style = {{width: '50%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {'Select Chapters'}
                    header = {'Select Chapters*'}
                    footer = {''}
                  />
                </div>
                <span style = {{margin: '50px 20px'}}>
                  <Toggle 
                    header = {'For free users?'} 
                    size = {'40px'} 
                    color = {'gray'} 
                  />
                </span>
              </div>             

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

export default EditTest;


