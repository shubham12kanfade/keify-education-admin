import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Questions.css';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../smallComponents/button/Button';
import Dropdown from '../../smallComponents/dropdown/Dropdown';
import Header from '../../smallComponents/header/Header';
import TextEditor from '../../smallComponents/editor/TextEditor';
import Input from '../../smallComponents/input/Input';

function Questions() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [text, setText] = useState("");
  const [text_2, setText_2] = useState("");

  return (
    <>
      <div style={{ color: '#fff' }}>
        <div className='bars' onClick={showSidebar}>
          {/* <Button text = 'Questions' /> */}
          <span >
          <input
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
          />
          </span>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <span style = {{
                  position: 'relative',
                  right: '80px',
                }}>
                  <Header title = {'Questions'} />
                </span>
                <AiOutlineClose style = {{color: '#333'}} onClick={showSidebar} />
              </div>
            </li>

            <div className = 'mainDiv'>
              <TextEditor 
                heading = {'Question*'}
              />
              <br/><br/><br/><br/>
              
              <div style = {{display: 'flex'}}>
                <div style = {{width: '25%', marginRight: '40px'}}>
                  <h3 className = "question__type__header">
                    Question Type*
                  </h3>
                  <div className = "question__type">
                    <span className = 'active'>MCQ</span>
                    <span>MSQ</span>
                    <span>Numarics</span>
                  </div>

                  <div className = "question__marks">
                    <span className = "checkbox__button">
                      <input 
                        type="radio" 
                        id="marks" 
                        name="marks"
                      />
                      <label for = "marks">60</label>
                      <AiOutlineEdit color = 'blue' className = 'question__icon'/>
                      <AiOutlinePlus color = 'black' className = 'question__icon'/>
                      <AiOutlineMinusCircle color = 'red' className = 'question__icon'/>
                      <AiOutlinePlusCircle color = 'green' className = 'question__icon'/>
                    </span>

                    <span className = "checkbox__button">
                      <input 
                        type="radio" 
                        id="marks" 
                        name="marks"
                      />
                      <label for = "marks">80</label>
                      <AiOutlineEdit color = 'blue' className = 'question__icon'/>
                      <AiOutlinePlus color = 'black' className = 'question__icon'/>
                      <AiOutlineMinusCircle color = 'red' className = 'question__icon'/>
                      <AiOutlinePlusCircle color = 'green' className = 'question__icon'/>
                    </span>

                    <span className = "checkbox__button">
                      <input 
                        type="radio" 
                        id="marks" 
                        name="marks"
                      />
                      <label for = "marks">40</label>
                      <AiOutlineEdit color = 'blue' className = 'question__icon'/>
                      <AiOutlinePlus color = 'black' className = 'question__icon'/>
                      <AiOutlineMinusCircle color = 'red' className = 'question__icon'/>
                      <AiOutlinePlusCircle color = 'green' className = 'question__icon'/>
                    </span>

                    <span className = "checkbox__button">
                      <input 
                        type="radio" 
                        id="marks" 
                        name="marks"
                      />
                      <label for = "marks">120</label>
                      <AiOutlineEdit color = 'blue' className = 'question__icon'/>
                      <AiOutlinePlus color = 'black' className = 'question__icon'/>
                      <AiOutlineMinusCircle color = 'red' className = 'question__icon'/>
                      <AiOutlinePlusCircle color = 'green' className = 'question__icon'/>
                    </span>
                  </div>
                </div>
                <div style = {{width: '30%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {''}
                    header = {'Select Difficulty*'}
                    footer = {''}
                  />
                </div>
                <div style = {{width: '15%'}}>
                  <Input 
                    type = {'name'} 
                    placeholder = {'3'} 
                    width = {'60%'} 
                    header = {'Marks*'}
                  />
                </div>
                <div style = {{width: '30%'}}>
                  <Input 
                    type = {'name'} 
                    placeholder = {'1'} 
                    width = {'93%'} 
                    header = {'Nagative Marks'}
                  />
                </div>
              </div>
              
              <div style = {{display: 'flex'}}>
                <div style = {{width: '30%', marginRight: '20px'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {[]}
                    defaultValue = {''}
                    header = {'Attach With*'}
                    footer = {''}
                  />
                </div>

                <div style = {{width: '50%'}}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {["English","Hindi","Marathi","Social Science","Mathematics"]}
                    defaultValue = {'Select a Subject'}
                    header = {'Select Subject*'}
                    footer = {''}
                  />
                </div>
              </div><br/><br/><br/><br/>

              <TextEditor 
                heading = {'Explanation*'}
              />
               <br/><br/>
              <TextEditor 
                heading = {'Instructions'}
              />

              <div style = {{display: 'flex', position: 'relative', left: '890px'}}>
                <Button text = {'Cancel'} cancel />
                <Button text = {'Submit'} />
              </div>
            </div>
                
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Questions;


