import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import CreateNewTest from '../../components/createNewTest/CreateNewTest';

import TestList from "../../components/testlist/TestList";
import EditTest from '../../components/editTest/EditTest';
import Questions from '../../components/questions/Questions';

function Test() {

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
      {/* <CreateNewTest />    
      <EditTest />
      <Questions /> */}
      <TestList />
    </div>
  )
}

export default Test
