import React from 'react'
import Analytics from './main-content/Analytics'
import RightSideBar from './main-content/RightSideBar'
import Stats from './main-content/Stats'
import TransactionHistory from './main-content/TransactionHistory'

export default function Main() {
  let transactions = [
    {
      sno: 1,
      customerName: "Shubham Sawant",
      customerEmail: "imshubham.here@gmail.com",
      status: "Success",
      date: "Nov 02, 2023",
      invoice: "$100,000"
    },
    {
      sno: 2,
      customerName: "Shankar Sawant",
      customerEmail: "imshubham.here@gmail.com",
      status: "Success",
      date: "Nov 02, 2023",
      invoice: "$100,000"
    },{
      sno: 3,
      customerName: "Shailesh Sawant",
      customerEmail: "imshubham.here@gmail.com",
      status: "Success",
      date: "Nov 02, 2023",
      invoice: "$100,000"
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
      sno: 1,
      title: "Monthly Sales",
      amount: "$3.500",
      percent: "+6.4%",
      prevYear: "$2.7k"
    },
    {
      sno: 1,
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
