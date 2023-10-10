import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons'
import Transaction from './Transaction';

export default function TransactionHistory(props) {
  return (
    <div className='transaction-history'>
      <div className="heading">
        <p>Transaction History</p>
        <div className='month-filter'>
          <FontAwesomeIcon icon={faCalendar} color='grey'/>
          <select name="month" id="month">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
          </select>
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="filter">
          <select name="Recepient" id="recepient">
            <option value="Shubham">Shubham</option>
            <option value="Rahul">Rahul</option>
            <option value="Sammer">Sammer</option>
            <option value="Rohan">Rohan</option>
          </select>
        </div>
        <div className="filter">
          <select name="Amount" id="amount">
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
            <option value="400">$400</option>
          </select>
        </div>
        <div className="filter">
          <select name="Status" id="status">
            <option value="Success">Success</option>
            <option value="Pending">Feb</option>
            <option value="Forwarded">Forwarded</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>
      <div className="display-table">
        <div className='transaction'>
          <div className="row default">
              <div className="customer">Customer</div>
              <div className="status">Status</div>
              <div className="date">Date</div>
              <div className="invoice">Invoice</div>
              <div className="people">People</div>
          </div>
          {props.transactions.map((transaction, i)=>{
            return <Transaction transaction={transaction} key={i}/>
          })}
        </div>
      </div>
    </div>
  )
}
