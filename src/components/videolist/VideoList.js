// import React from "react";
//  import "./Video.css";

// // import FileCopyIcon from "@material-ui/icons/FileCopy";
// import { FiFilter } from "react-icons/fi";
// import { RiGlobalLine} from "react-icons/ri";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDeleteOutline } from "react-icons/md";
// import {AiOutlineVideoCamera} from "react-icons/ai";
// import {MdOutlinePaid} from "react-icons/md";
// import{BsFileText} from "react-icons/bs"

// function Video() {
//   return (
//     <main>
//       <div className="head-of-test">
//         <div className="top-left">
//         <h3>
//         <AiOutlineVideoCamera /> Videos
//         </h3>
//         </div>

//         <div className="top-right">
//           <button className="filter-icon">
//             <FiFilter />
//           </button>
//           <input className="input" type="text" placeholder="search test..." />
//           <button className="add-btn">+ ADD</button>
//         </div>
//       </div>

//       <div className="table-box">
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Simple Interest</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Quantitative Ability</button>
//             <button className="button_video">Quantitative Ability</button>
//             <button className="button_video">Quantitative Ability</button>
//             <button className="button_video">Quantitative Ability</button>
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Think Without Ink , Fun QA Learning</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button"> EPL Highlights</button>
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Menti quiz - Set Theory LRDI</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">EPL Highlights</button>
            
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">GD Checklist</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Group Discussion</button>
          
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        

//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Types and Topics of GD</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Group Discussion</button>
            
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        
        
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">GD Introduction</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Group Discussion</button>
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        
 
          
//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Sample Answer 2 </p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Personal Interview</button>
        
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        

//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Sample Answer 1</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Personal Interview</button>
            
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        

//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">Interview Tips</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Personal Interview</button>
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        

//         <div className="table-row">
//           <div className="table-cell">
//             <p className="test-name">why Should We Hire You</p>
//             <p>
//             <span className="span_video"><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span className="span_paid"> Paid</span><br/>
//               </p>
//             {/* <p>
//                 <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
//             </p> */}
//             <button className="button">Personal Interview</button>
            
//           </div>

//           <div className="table-cells" >
//           <button className="question-icons-pencil">

//           <label className="switch" > 
//               <input type="checkbox" />
//               <span className="slider"> </span> 
//             </label>
//             </button> 

//             <button className="question-icons-pencil">
//               <AiOutlineEdit /> 
//             </button> 

//             <button className="question-icons-card">
//               <RiGlobalLine /> 
//             </button> 

//             <button className="question-icons-del">
//               <MdDeleteOutline /> 
//             </button>
//           </div>
//         </div>
        




//         </div>
//     </main>
//   );
// }

// export default Video;


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
import { videoData } from '../../data/videoData';
import Button from '../../smallComponents/button/Button';
import CreateNewVideo from '../createNewVideo/CreateNewVideo';
import './VideoList.css';
import VideoComp from './videoComp/VideoComp';


const VideoList = () => {

    const [videos, setVideos] = useState(videoData);
    return (
        <div className = 'videolist'>
            <div className = 'videolist__top'>
                <div style = {{color: 'black', marginTop: '10px', marginRight: '600px', marginLeft: '20px', fontSize : '25px'}}>
                    <AiOutlineVideoCamera  fontSize = '20px' />
                    Videos
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
                <CreateNewVideo />
            </div>
            <div className = 'videolist__content'>
                <VideoComp  videos = {videos} />
            </div>
        </div>
    )
    
}

export default VideoList;