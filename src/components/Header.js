import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function header() {
  return (
    <div className='header'>
      <div className="profile-wrapper">
        <div className="profile-img">
          <img src="img/profile-pic-2.png" alt="" />
        </div>
        <div className="profile-welcome">
          <p className='good-wishes'>Good Evening Team!</p>
          <p className='welcome-note'>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      <div className="header-operations">
        <div className="search-alert">
          <FontAwesomeIcon icon={faMagnifyingGlass} color='black' className='search'/>
          <FontAwesomeIcon icon={faBell} color='black' />
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
