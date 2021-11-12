import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './createNewVideo.css';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../smallComponents/button/Button';
import Header from '../../smallComponents/header/Header';
import Input from '../../smallComponents/input/Input';
import TextEditor from '../../smallComponents/editor/TextEditor';
import Toggle from '../../smallComponents/toggle/Toggle';

function CreateNewVideo() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [text, setText] = useState("");

  return ( 
    <>
      <div style={{ color: '#fff' }}>
        <div className=''>
          <div className='bars' onClick={showSidebar}>
            <Button text = 'Add' />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <Header title = {'Create a New Video'} />
                <AiOutlineClose style = {{color: '#333'}} onClick={showSidebar} />
              </div>
            </li>
            <div className = 'mainDiv'>
              <div style = {{display: 'flex'}}>
                <DragUpload 
                  width = '25vw' 
                  text = 'Images' 
                  subtext = '*Select only jpeg, jpg, png, webp files' 
                />
                <DragUpload 
                  width = '25vw' 
                  text = 'Preview Video' 
                  subtext = '*Select only mp4, 3gp, avi, mov, webm, mkv files' 
                />
                <DragUpload 
                  width = '25vw' 
                  text = 'Video' 
                  subtext = '*Select only mp4 files' 
                />
              </div>

              <div style = {{display: 'flex'}}>
                <Input 
                  type = {'name'} 
                  placeholder = {'Enter a name'} 
                  width = {'90%'} 
                  header = {'Name*'}
                />
                <span style = {{position: 'relative', top: '40px', right: '70px'}}>
                  <Toggle header = {'Free Video?'} size = {'40px'} color = {'gray'} />
                </span>
              </div>

              <h3 style = {{
                color: '#333',
                fontSize: '17px',
                fontWeight: 'bold',
                margin: '20px 10px 10px 10px',
                textAlign: 'left',
                width: '50%',
                }}
              >
                Short Description*
              </h3>
              <textarea 
                type = "description" 
                placeholder = " Enter a short Description" 
                rows="5" 
                cols="50" 
                style = {{
                  color: '#333',
                  fontSize: '20px',
                  paddingLeft: '3px',
                  width : '98%',
                  height: '60px',
                  marginLeft: '10px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  outlineWidth: '0',
                  border: '1px solid lightgray',
                  borderRadius: '5px',
                  boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
                }} 
              />

              <TextEditor heading = {'Long Description*'} />

              <DragUpload width = '77vw' text = 'Attach Files' />

              <div style = {{display: 'flex', marginLeft: '900px'}}>
                <Button text = 'Cancel' />
                <Button text = 'Submit' />
              </div>
            </div>
            
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CreateNewVideo;


