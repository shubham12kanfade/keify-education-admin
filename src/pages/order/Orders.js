import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import CreateNewOrder from '../../components/createNewOrder/CreateNewOrder';
import OrderList from '../../components/orderlist/OrderList';

function Order() {

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
      <OrderList />
      {/* <CreateNewOrder /> */}
    </div>
  )
}

export default Order
