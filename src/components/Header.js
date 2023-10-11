import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header flex justify-between flex-row'>
      <div className="profile-wrapper flex items-center">
        <div className="profile-img flex justify-center items-center">
          <div className="profile-img-inner flex justify-center items-center">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
          <div className="small-circle text-xs  flex justify-center items-center">3</div>
        </div>
        <div className="profile-welcome text-3xl">
          <p className='good-wishes'>Good Evening Team!</p>
          <p className='welcome-note text-sm'>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      <div className="header-operations flex justify-between items-center">
        <div className="search-alert flex justify-between">
          <FontAwesomeIcon icon={faMagnifyingGlass} color='black' className='text-lg search'/>
          <FontAwesomeIcon icon={faBell} color='black' className='text-xl bell'/>
          <div className="small-circle"></div>
        </div>
        <div className="logout flex justify-center items-center">
          <img src="img/profile-pic-2.png" alt="" />
          <p className='text-sm'>Jhontosan</p>
          <FontAwesomeIcon icon={faChevronDown} color='black' className='text-xs'/>
        </div>
      </div>
    </div>
  )
}
