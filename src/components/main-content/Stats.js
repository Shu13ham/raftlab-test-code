import React from 'react'

export default function Stats(props) {
  return (
    <div className='stats-wrapper flex justify-between items-center flex-row'>
      {props.stats.map((stat, i)=>{
        return(
          <div className="stat  flex justify-center items-center" key={i}>
            <div className="img  flex justify-center items-center">
              <img src="img/cash-stack-1.png" alt="" />
            </div>
            <div className="info">
              <p className='title grey-12 m-0'>{stat.title}</p>
              <div className='amount-percent  flex justify-center items-center'>
                <span className='amount text-lg'>{stat.amount}</span>
                <span className='percent text-xs'>{stat.percent}</span>
              </div>
              <p className='previous-record m-0 text-xs'><span className='grey-12'>Previous Year </span>{stat.prevYear}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
