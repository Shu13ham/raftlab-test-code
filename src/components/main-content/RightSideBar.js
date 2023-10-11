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
    <div className='right-sidebar w-1/4 min-w-[270px]'>
      <p className='subhead text-primary font-medium m-0 text-sm'>Premium Access</p>
      <p className='info w-48 font-medium m-0 text-3xl'>Take Back Your Creative Control</p>
      <div className="profiles flex">
        <div className="photo-wrapper max-w-[25px]">
          <div className="profile border-white bg-pink-200 w-10 h-10 flex justify-center items-center text-sm">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper max-w-[25px]">
          <div className="profile border-white bg-pink-200 w-10 h-10 flex justify-center items-center text-sm">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper max-w-[25px]">
          <div className="profile border-white bg-pink-200 w-10 h-10 flex justify-center items-center text-sm">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper max-w-[25px]">
          <div className="profile border-white bg-pink-200 w-10 h-10 flex justify-center items-center">
            <img src="img/profile-pic-2.png" alt="" />
          </div>
        </div>
        <div className="photo-wrapper max-w-[25px]">
          <div className="profile border-white text-white bg-black w-10 h-10 flex justify-center items-center default non-primary text-white">
            +10
          </div>
        </div>
      </div>
      <select name="The Professional Platform" id="professional-platform" className='text-grey-text'>
        <option value="prof-platform text-xs text-grey-text">The Professional Platform</option>
        <option value="unprof-platform">The UnProfessional Platform</option>
      </select>
      <button className='border-grey-lines text-primary w-full flex justify-between  font-semibold'><span>Upgrade Now</span><FontAwesomeIcon icon={faArrowRight} color='#6c62dd' size='lg' /></button>
      <hr className='bg-grey-lines'/>
      <div className="calendar">
        <Calendar showDetailsHandle={showDetailsHandle} />
      </div>
      {props.meetings.map((meeting, i)=>{
        return (
          <div className="upcoming-meetings-wrapper" key={i}>
            <div className="upcoming-meeting flex justify-start items-center">
              <div className="meeting-icon bg-gray-100 w-14 h-14 flex justify-center items-center">
                <img src={meeting.photo} alt="" className='w-7 h-7'/>
              </div>
              <div className="meetings">
                <p className='m-0  font-semibold'>{meeting.meetingHeading}</p>
                <span className='text-sm text-grey-text first'><FontAwesomeIcon icon={faVideo} color='#999' className='text-grey-text' />{meeting.meetType}</span>
                <span className='text-sm text-grey-text'><FontAwesomeIcon icon={faClock} color='#999' className='text-grey-text' />{meeting.time}</span>
              </div>
            </div>
          </div>
        )})}
    </div>
  )
}
