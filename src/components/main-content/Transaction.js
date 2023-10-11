import React from 'react'

export default function Transaction({transaction}) {
  return (
        <div className="row  flex items-center">
            <div className="customer flex items-center flex-row">
                <div className="customer-photo flex justify-center items-center">
                    <img src="img/profile-pic-2.png" width={30} height={30} alt="" />
                    <div className="black-outer flex justify-center items-center">
                        <img src="img/star.png" alt="" width={10} />
                    </div>
                </div>
                <div className="customer-info">
                    <p className="customer-name m-0">{transaction.customerName}</p>
                    <p className="customer-email m-0 text-xs">{transaction.customerEmail}</p>
                </div>
            </div>
            <div className="status text-xs">
                <div className="status-fill">
                    {transaction.status}    
                    <div className="small-circle"></div>
                </div>
            </div>
            <div className="date text-xs">{transaction.date}</div>
            <div className="invoice text-xs">{transaction.invoice}</div>
            <div className="people flex flex-row text-xs">
                <div className="photo-wrapper">
                    <div className="photo  flex justify-center items-center">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div className="photo  flex justify-center items-center">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div className="photo  flex justify-center items-center">
                        <img src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}
