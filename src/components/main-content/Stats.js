import React from 'react'

export default function Stats(props) {
  return (
    <div className='stats-wrapper'>
      {props.stats.map((stat, i)=>{
        return(
          <div className="stat" key={i}>
            <div className="img">
              <img src="img/cash-stack-1.png" alt="" />
            </div>
            <div className="info">
              <p className='title grey-12 m-0'>{stat.title}</p>
              <div className='amount-percent'>
                <span className='amount'>{stat.amount}</span>
                <span className='percent'>{stat.percent}</span>
              </div>
              <p className='previous-record m-0 fs-12'><span className='grey-12'>Previous Year </span>{stat.prevYear}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
