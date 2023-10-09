import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faClock, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function RightSideBar() {
  return (
    <div className='right-sidebar'>
      <p className='subhead m-0'>Premium Access</p>
      <p className='info m-0'>Take Back Your Creative Control</p>
      <div className="profiles">
        <div className="profile">
          <img src="img/profile-pic-2.png" alt="" />
        </div>
        <div className="profile non-primary">
          <img src="img/profile-pic-2.png" alt="" />
        </div>
        <div className="profile non-primary">
          <img src="img/profile-pic-2.png" alt="" />
        </div>
        <div className="profile non-primary">
          <img src="img/profile-pic-2.png" alt="" />
        </div>
        <div className="profile default non-primary">
          +10
        </div>
      </div>
      <select name="The Professional Platform" id="professional-platform">
        <option value="prof-platform grey-12">The Professional Platform</option>
        <option value="unprof-platform">The UnProfessional Platform</option>
      </select>
      <button><span>Upgrade Now</span><FontAwesomeIcon icon={faArrowRight} color='#6c62dd' /></button>
      <hr />
      <div className="calendar">

      </div>
      <div className="upcoming-meetings-wrapper">
        <div className="upcoming-meeting">
          <div className="meeting-icon">
            <img src="img/laptop.png" alt="" />
          </div>
          <div className="meetings">
            <p className='m-0'>Meeting with Client</p>
            <span className='grey-14 first'><FontAwesomeIcon icon={faVideo} color='#999' />Google Meet</span>
            <span className='grey-14'><FontAwesomeIcon icon={faClock} color='#999' />12 pm</span>
          </div>
        </div>
        <hr />
        <div className="upcoming-meeting">
          <div className="meeting-icon">
            <img src="img/book.png" alt="" />
          </div>
          <div className="meetings">
            <p className='m-0'>Weekly Report</p>
            <span className='grey-14 first'><FontAwesomeIcon icon={faVideo} color='#999' />Google Meet</span>
            <span className='grey-14'><FontAwesomeIcon icon={faClock} color='#999' />03 pm</span>
          </div>
        </div>
        <hr />
        <div className="upcoming-meeting">
          <div className="meeting-icon">
            <img src="img/book.png" alt="" />
          </div>
          <div className="meetings">
            <p className='m-0'>Daily Scrum Meeting</p>
            <span className='grey-14 first'><FontAwesomeIcon icon={faVideo} color='#999' />Google Meet</span>
            <span className='grey-14'><FontAwesomeIcon icon={faClock} color='#999' />05 pm</span>
          </div>
        </div>
      </div>
    </div>
  )
}