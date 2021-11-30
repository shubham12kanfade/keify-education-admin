import React, { useState } from 'react';
import './createNewTest.css';
import {AiOutlineClose} from 'react-icons/ai';
import DragUpload from '../../smallComponents/dragUpload/DragUpload';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from '../../smallComponents/button/Button';
import Dropdown from '../../smallComponents/dropdown/Dropdown';
import Input from '../../smallComponents/input/Input';
import Header from '../../smallComponents/header/Header';
import TextEditor from '../../smallComponents/editor/TextEditor';
import Toggle from '../../smallComponents/toggle/Toggle';
import Axios from 'axios';

function CreateNewTest() {
  const [sidebar, setSidebar] = useState(false);
  const [selected, setSelected] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  // const [text, setText] = useState("");
  // const [text_2, setText_2] = useState("");
  
  const url = 'http://3.6.132.160:4000/api/v1/test/add';
  const [data, setData] = useState({
     name: '',
     generalInstruction: '',
     paperInstruction: '',
     examType: '',
     completionTime: '',
     textType: '',
     selectBranch: '',
     image: '',
  })

  const submit = (e) => {
    e.preventDefault();
    Axios
      .post(url, {
        name: data.name,
        generalInstruction: data.generalInstruction,
        paperInstruction: data.paperInstruction,
        examType: data.examType,
        completionTime: data.completionTime,
        textType: data.textType,
        selectBranch: data.selectBranch,
        image: data.image,
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

             <div className = 'mainDiv'
            //   <form  
            //  className = 'mainDiv'
            onSubmit = {(e) => submit(e)}
            >
              <span 
                  style = {{
                    width: '100%' }}
                >
                 
                  <h3 className = "heading">Enter a name</h3>
                  <input 
                    // className = 'input' 
                    id = "name"
                    onChange = {(e) => handleEvent(e)}
                    value = {data.name}
                    type = 'name'
                    placeholder = 'name'
                    style = {{
                      width: '95%',
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
                </span>
               
              {/* <span 
               id="name"
               onChange = {(e) => handleEvent(e)}
               value = {data.name} >
              <Input 
                id="name"
                onChange = {(e) => handleEvent(e)}
                value = {data.name}
                type = {'name'} 
                placeholder = {'Enter a name'} 
                width = {'98%'} 
                header = {'Name*'} 
              />
              </span> */}
               
               <span 
                 id="generalIntruction"
                 onChange = {(e) => handleEvent(e)}
                 value = {data.generalInstruction} 
                 >
              <TextEditor heading = {'General Instruction'}
              /> 
                 </span>


                <span id="paperInstruction"
                onChange = {(e) => handleEvent(e)}
                value = {data.paperInstruction}
                 >
              <TextEditor heading = {'Paper Instruction'}/>
                 </span>
              

              <span style = {{margin: '10px'}}>
                <Toggle 
                  header = {'For MMT'} 
                  size = {'40px'} 
                  color = {'gray'} 
                />
              </span>

              <div style = {{display: 'flex'}}>
                <div style = {{width: '50%'}}>

                  <span 
                  id="examType"
                  onChange = {(e) => handleEvent(e)}
                    value = {data.examType}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    
                    value = {["multiple type questions","Essay Exams","Open Book Test","Reading Exams"]}
                    defaultValue = {'Exam Type'}
                    header = {'Exam Type*'}
                    footer = {''} 
                  />
                  </span>
                </div>
                    
                <span>
                  {/* // id="completionTime" 
                  // onChange = {(e) => handleEvent(e)}
                  // value = {data.completionTime} */}
                {/* <Input 
                  id="completionTime" 
                  onChange = {(e) => handleEvent(e)}
                  value = {data.completionTime}
                  type = {"time"} 
                  placeholder = {'Select time'} 
                  width = {"50%"} 
                  header = {'Completion time'} 
                /> */}
               <h3 className = "heading">Completion time</h3>
                <input 
                    // className = 'input' 
                    id = "completionTime"
                    onChange = {(e) => handleEvent(e)}
                    value = {data.completionTime}
                    type = 'time'
                    placeholder = 'Select time'
                    style = {{
                      width: '95%',
                      color: '#333',
                      marginLeft: '10px',
                      marginTop:'auto',
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
                </span>
              </div><br/><br/> <br/> <br/>  

              <div style={{display: 'flex'}}>
                <div style = {{width: '50%'}}>

                  <span
                   id="testType"
                   onChange = {(e) => handleEvent(e)}
                    value = {data.textType}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {["English","Hindi","Marathi","Social Science","Mathematics"]}
                    defaultValue = {'Test Type'}
                    header = {'Test Type*'}
                    footer = {''}
                  />
                  </span>
                </div>

                <div style = {{width: '50%'}}>
                  <span 
                  id="selectBranch"
                  onChange = {(e) => handleEvent(e)}
                    value = {data.selectBranch}>
                  <Dropdown 
                    // selected = {selected} 
                    // setSelected = {setSelected} 
                    // value = {value} 
                    value = {["Electronics","Computer Science","Mechanical","Civil","Information Technology"]}
                    defaultValue = {'Select a Branch'}
                    header = {'Select Branch*'}
                    footer = {''}
                  />
                  </span>
                </div>
              </div>

              <span style = {{margin: '10px'}}>
                <Toggle 
                  header = {'For free users?'} 
                  size = {'40px'} 
                  color = {'gray'} 
                />
              </span>

              <span 
                  id = "image"
                  onChange = {(e) => handleEvent(e)}
                  value = {data.image}
              >
              <DragUpload 
                width =  {'77vw'} 
                text = {'Image'} 
                subtext = {'*Select only jpeg, jpg, png, webp files'}
              />
              </span>

              <div style = {{display: 'flex', marginLeft: '670px'}}>
                <Button text = {'Cancel'} cancel />
                <Button text = {'Submit and Add Question'} />
                <Button text = {'Submit'} />
              </div>
             
             {/* </form> */}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CreateNewTest;