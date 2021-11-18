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
import { useEffect } from 'react';


const VideoList = () => {

    // const [videos, setVideos] = useState(videoData);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const url = 'http://3.6.132.160:4000/api/v1/video/getAll';
        fetch(url).then(res => res.json())
        .then(res => setVideos(res.data));
    }, []);


    return (
        <div className = 'videolist'>
            <div className = 'videolist__top'>
                <div className = 'videolist__top__left'>
                    <span><AiOutlineVideoCamera  fontSize = '30px' /></span>
                    <p>Videos</p>
                </div>
                <div className = 'videolist__top__right'> 
                    <span><AiOutlineFilter fontSize = '25px' /></span>
                    <input 
                        type = 'text' 
                        name = 'videos' 
                        placeholder = 'Search Videos' 
                    />
                    <CreateNewVideo />
                </div>            
            </div>
            <div className = 'videolist__content'>
                {
                    videos.map(video => (
                        <VideoComp video = {video} />
                    ))
                }
            </div>
        </div>
    )
    
}

export default VideoList;