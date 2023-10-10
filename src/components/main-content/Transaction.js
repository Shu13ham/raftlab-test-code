import React from 'react'

export default function Transaction({transaction}) {
  return (
        <div className="row">
            <div className="customer">
                <div className="customer-photo">
                    <img src="img/profile-pic-2.png" width={30} height={30} alt="" />
                    <div className="black-outer">
                        <img src="img/star.png" alt="" width={10} />
                    </div>
                </div>
                <div className="customer-info">
                    <p className="customer-name m-0">{transaction.customerName}</p>
                    <p className="customer-email m-0">{transaction.customerEmail}</p>
                </div>
            </div>
            <div className="status">
                <div className="status-fill">
                    {transaction.status}    
                    <div className="small-circle"></div>
                </div>
            </div>
            <div className="date">{transaction.date}</div>
            <div className="invoice">{transaction.invoice}</div>
            <div className="people">
                <div className="photo-wrapper">
                    <div className="photo">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div className="photo">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div className="photo">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}
