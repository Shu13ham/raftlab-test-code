import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header'>
      <div className="profile-wrapper">
        <div className="profile-img">
          <div className="profile-img-inner">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
          <div className="small-circle">3</div>
        </div>
        <div className="profile-welcome">
          <p className='good-wishes'>Good Evening Team!</p>
          <p className='welcome-note'>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      <div className="header-operations">
        <div className="search-alert">
          <FontAwesomeIcon icon={faMagnifyingGlass} color='black' className='search'/>
          <FontAwesomeIcon icon={faBell} color='black' className='bell'/>
          <div className="small-circle"></div>
        </div>
        <div className="logout">
          <img src="img/profile-pic-2.png" alt="" />
          <p>Jhontosan</p>
          <FontAwesomeIcon icon={faChevronDown} color='black' />
        </div>
      </div>
    </div>
  )
}
