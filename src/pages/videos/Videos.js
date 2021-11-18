import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import CreateNewVideo from '../../components/createNewVideo/CreateNewVideo';
import TestFilter from '../../components/testFilter/test-filter';
import VideoList from '../../components/videolist/VideoList';

function Videos() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      {/* <CreateNewVideo />    */}
      <VideoList />
    </div>
  )
}

export default Videos
