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
import Axios from 'axios';

function CreateNewVideo() {
  const [sidebar, setSidebar] = useState(false);
  const [text, setText] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  const url = 'http://3.6.132.160:4000/api/v1/video/add';
  const [data, setData] = useState({
    image: '',
    previewVideo: '',
    name: '',
    shortDesc: '',
    longDesc: '',
    attchFile: [],
  })

  const submit = (e) => {
    e.preventDefault();
    Axios
      .post(url, {
        image: data.image,
        previewVideo: data.previewVideo,
        name: data.name,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
        attchFile: data.attchFile,
      })
      .then(res => {
        console.log('api post data >>>', res.data);
      })
  }

  const handleEvent = (e) => {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log('data', newData)
  }

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
            <form 
              className = 'mainDiv'
              onSubmit = {(e) => submit(e)}
            >
              <div style = {{display: 'flex'}}>
                <span 
                >
                  <DragUpload id = "image"
                    onChange = {(e) => handleEvent(e)}
                    value = {data.image}
                    width = '23vw' 
                    text = 'Images' 
                    subtext = '*Select only jpeg, jpg, png, webp files' 
                  />
                </span>

                <span id = "previewVideo"
                  onChange = {(e) => handleEvent(e)}
                  value = {data.previewVideo}
                >
                  <DragUpload 
                    width = '23vw' 
                    text = 'Preview Video' 
                    subtext = '*Select only mp4, 3gp, avi, mov, webm, mkv files' 
                  />
                </span>

                <span id = "previewVideo"
                  onChange = {(e) => handleEvent(e)}
                  value = {data.previewVideo}
                >
                  <DragUpload 
                    width = '23vw' 
                    text = 'Video' 
                    subtext = '*Select only mp4 files' 
                  />
                </span>

              </div>

              <div style = {{display: 'flex'}}>
                <span 
                  style = {{
                    width: '90%' }}
                >
                  {/* <Input 
                    type = {'name'} 
                    placeholder = {'Enter a name'} 
                    width = {'90%'} 
                    header = {'Name*'}
                  /> */}
                  <h3 className = "heading">Enter a name</h3>
                  <input 
                    // className = 'input' 
                    id = "name"
                    onChange = {(e) => handleEvent(e)}
                    value = {data.name}
                    type = 'name'
                    placeholder = 'name'
                    style = {{
                      width: '90%',
                      color: '#333',
                      marginLeft: '10px',
                      fontSize: '20px',
                      paddingLeft: '10px',
                      height: '50px',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      outlineWidth: '0',
                      border: '1.5px solid lightgray',
                      borderRadius : '5px',
                      boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
                    }}
                  />
                  <p className = 'footer'></p>
                </span>
                <span style = {{position: 'relative', top: '40px', right: '70px'}}>
                  <Toggle header = {'Free Video?'} size = {'40px'} color = {'gray'} />
                </span>
              </div>

              <span id = "shortDesc"
                onChange = {(e) => handleEvent(e)}
                value = {data.shortDesc}
              >
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
              </span>

              <span id = "longDesc"
                onChange = {(e) => handleEvent(e)}
                value = {data.longDesc}
              >
                <TextEditor heading = {'Long Description*'} />
              </span>

              <span id = "attchFile"
                onChange = {(e) => handleEvent(e)}
                value = {data.attchFile}
              >
                <DragUpload width = '77vw' text = 'Attach Files' />
              </span>

              <div style = {{display: 'flex', marginRight: '0', marginLeft: 'auto'}}>
                <Button text = {'Cancel'} cancel />
                <Button text = 'Submit' />
                <button 
                  style = {{
                    backgroundColor: '#4B0082',
                    border: 'none',
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
                >submit</button>
              </div>
            </form>
            
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CreateNewVideo;


