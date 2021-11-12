import React from 'react'
import OrderList from './components/orderlist/OrderList'

function ZedIndex({ visibility }) {
  return (
    visibility ?
      <OrderList zedIndex = {true} />
      :
      <OrderList zedIndex = {false} />
  )
}

export default ZedIndex
