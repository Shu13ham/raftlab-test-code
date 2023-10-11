import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header flex justify-between flex-row'>
      <div className="profile-wrapper w-2/3 flex items-center">
        <div className="profile-img bg-white w-16 h-16 flex justify-center items-center">
          <div className="profile-img-inner w-14 h-14 flex justify-center items-center">
            <img src="img/profile-pic-2.png" alt="" className='w-10 h-10'/>
          </div>
          <div className="small-circle bg-primary text-white w-5 h-5 text-xs  flex justify-center items-center">3</div>
        </div>
        <div className="profile-welcome text-3xl">
          <p className='good-wishes m-0 font-semibold'>Good Evening Team!</p>
          <p className='welcome-note text-grey-text m-0 text-sm'>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      <div className="header-operations w-1/3 flex justify-between items-center">
        <div className="search-alert flex justify-between items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} color='black' className='search text-grey-text bg-grey-lines'/>
          <FontAwesomeIcon icon={faBell} color='black' className='text-xl bell text-grey-text'/>
          <div className="small-circle w-2.5 h-2.5 bg-primary"></div>
        </div>
        <div className="logout h-10 flex justify-center items-center  font-medium">
          <img src="img/profile-pic-2.png" alt="" className='w-5 h-5' />
          <p className='text-sm'>Jhontosan</p>
          <FontAwesomeIcon icon={faChevronDown} color='black' className='text-xs text-grey-text'/>
        </div>
      </div>
    </div>
  )
}
