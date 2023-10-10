import React from 'react'
import Analytics from './main-content/Analytics'
import RightSideBar from './main-content/RightSideBar'
import Stats from './main-content/Stats'
import TransactionHistory from './main-content/TransactionHistory'

export default function Main() {
  let transactions = [
    {
      sno: 1,
      customerName: "Shubh Kaur",
      customerEmail: "teste@gmail.com",
      status: "Done",
      date: "Nov 01",
      invoice: "$1000"
    },
    {
      sno: 2,
      customerName: "Shan Iyer",
      customerEmail: "test2@gmail.com",
      status: "Done",
      date: "Dec 09",
      invoice: "$5000"
    },{
      sno: 3,
      customerName: "Mak Sen",
      customerEmail: "test3@gmail.com",
      status: "Done",
      date: "May 02",
      invoice: "$9000"
    }
  ];
  let meetings = [
    {
      sno: 1,
      photo: "img/laptop.png",
      meetingHeading: "Meeting with Client",
      meetType: "Google Meet",
      time: "12pm"
    },
    {
      sno: 2,
      photo: "img/book.png",
      meetingHeading: "Weekly Report",
      meetType: "Google Meet",
      time: "3pm"
    },
    {
      sno: 3,
      photo: "img/laptop.png",
      meetingHeading: "Meeting with Client",
      meetType: "Google Meet",
      time: "5pm"
    },
  ];
  let stats = [
    {
      sno: 1,
      title: "Monthly Revenue",
      amount: "$4.500",
      percent: "+2.4%",
      prevYear: "$1.7k"
    },
    {
      sno: 2,
      title: "Monthly Sales",
      amount: "$3.500",
      percent: "+6.4%",
      prevYear: "$2.7k"
    },
    {
      sno: 3,
      title: "Total Profit",
      amount: "$8.500",
      percent: "+1.4%",
      prevYear: "$5.7k"
    },
  ];
  return (
    <div className='main'>
        <div className="main-division">
          <Stats stats={stats}/>
          <Analytics/>
          <TransactionHistory transactions={transactions}/>
        </div>
        <RightSideBar meetings={meetings}/>
    </div>
  )
}
