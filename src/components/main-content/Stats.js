import React from 'react'

export default function Stats() {
  return (
    <div className='stats-wrapper'>
      <div className="stat">
        <div className="img">
          <img src="img/cash-stack-1.png" alt="" />
        </div>
        <div className="info">
          <p className='title grey-12 m-0'>Monthly Revenue</p>
          <span className='amount'>$4.500</span>
          <span className='percent'>+2.4%</span>
          <p className='previous-record m-0 fs-12'><span className='grey-12'>Previous Year </span>$1.7k</p>
        </div>
      </div>
      <div className="stat">
        <div className="img">
          <img src="img/cash-stack-1.png" alt="" />
        </div>
        <div className="info">
          <p className='title grey-12 m-0'>Monthly Sales</p>
          <span className='amount'>$4.500</span>
          <span className='percent'>+2.4%</span>
          <p className='previous-record m-0 fs-12'><span className='grey-12'>Previous Year </span>$1.7k</p>
        </div>
      </div><div className="stat">
        <div className="img">
          <img src="img/cash-stack-1.png" alt="" />
        </div>
        <div className="info">
          <p className='title grey-12 m-0'>Total Profit</p>
          <span className='amount '>$4.500</span>
          <span className='percent'>+2.4%</span>
          <p className='previous-record m-0 fs-12'><span className='grey-12'>Previous Year </span>$1.7k</p>
        </div>
      </div>
    </div>
  )
}
