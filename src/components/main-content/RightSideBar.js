import { React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faClock, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Calendar from './Calendar';
import 'react-calendar/dist/Calendar.css';

export default function RightSideBar(props) {
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
  };
  return (
    <div className='right-sidebar'>
      <p className='subhead m-0'>Premium Access</p>
      <p className='info m-0'>Take Back Your Creative Control</p>
      <div className="profiles">
        <div className="photo-wrapper">
          <div className="profile">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper">
          <div className="profile">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper">
          <div className="profile">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper">
          <div className="profile">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper">
          <div className="profile default non-primary">
            +10
          </div>
        </div>
      </div>
      <select name="The Professional Platform" id="professional-platform">
        <option value="prof-platform grey-12">The Professional Platform</option>
        <option value="unprof-platform">The UnProfessional Platform</option>
      </select>
      <button><span>Upgrade Now</span><FontAwesomeIcon icon={faArrowRight} color='#6c62dd' size='lg' /></button>
      <hr />
      <div className="calendar">
        <Calendar showDetailsHandle={showDetailsHandle} />
      </div>
      {props.meetings.map((meeting, i)=>{
        return (
          <div className="upcoming-meetings-wrapper" key={i}>
            <div className="upcoming-meeting">
              <div className="meeting-icon">
                <img src={meeting.photo} alt="" />
              </div>
              <div className="meetings">
                <p className='m-0'>{meeting.meetingHeading}</p>
                <span className='grey-14 first'><FontAwesomeIcon icon={faVideo} color='#999' />{meeting.meetType}</span>
                <span className='grey-14'><FontAwesomeIcon icon={faClock} color='#999' />{meeting.time}</span>
              </div>
            </div>
          </div>
        )})}
    </div>
  )
}
