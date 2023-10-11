import React from 'react'

export default function Transaction({transaction}) {
  return (
        <div className="row  flex items-center">
            <div className="customer w-1/3 flex items-center min-w-[90px] flex-row">
                <div className="customer-photo w-11 h-11 flex justify-center items-center">
                    <img src="img/profile-pic-2.png" width={30} height={30} alt="" />
                    <div className="black-outer bg-black w-5 h-5 flex justify-center items-center">
                        <img src="img/star.png" alt="" width={10} />
                    </div>
                </div>
                <div className="customer-info">
                    <p className="customer-name m-0  font-medium">{transaction.customerName}</p>
                    <p className="customer-email text-grey-text m-0 text-xs">{transaction.customerEmail}</p>
                </div>
            </div>
            <div className="status min-w-[70px] w-1/6 text-xs">
                <div className="status-fill w-16 font-medium">
                    {transaction.status}    
                    <div className="small-circle h-2 w-2"></div>
                </div>
            </div>
            <div className="date min-w-[60px] w-1/6 font-medium text-xs">{transaction.date}</div>
            <div className="invoice min-w-[55px] w-1/6 font-medium text-xs">{transaction.invoice}</div>
            <div className="people min-w-[50px] w-1/6 flex flex-row text-xs">
                <div className="photo-wrapper max-w-[20px]">
                    <div className="photo bg-grey-text w-8 h-8 flex justify-center items-center">
                        <img className='h-5 w-5' src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper max-w-[20px]">
                    <div className="photo bg-grey-text w-8 h-8 flex justify-center items-center">
                        <img className='h-5 w-5' src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
                <div className="photo-wrapper max-w-[20px]">
                    <div className="photo bg-grey-text w-8 h-8 flex justify-center items-center">
                        <img className='h-5 w-5' src="img/profile-pic-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}
