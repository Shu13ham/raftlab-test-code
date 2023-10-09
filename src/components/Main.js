import React from 'react'
import Analytics from './main-content/Analytics'
import RightSideBar from './main-content/RightSideBar'
import Stats from './main-content/Stats'
import TransactionHistory from './main-content/TransactionHistory'

export default function Main() {
  return (
    <div className='main'>
        <div className="main-division">
          <Stats/>
          <Analytics/>
          <TransactionHistory/>
        </div>
        <RightSideBar/>
    </div>
  )
}
