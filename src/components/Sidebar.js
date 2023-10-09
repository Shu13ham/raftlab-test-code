import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faHouse, faChartSimple, faCompass, faBagShopping, faComment, faGear, faCircleQuestion, faFolderClosed} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(click) {
    const [cancel, setCancel] = useState(0);
  return (
    <div className={`sidebar ${!click ? 'show' : ''}`}>
        <div className="company-logo">
            <img src="img/logo.png" alt="" />
            <h1>Omoi</h1>
        </div>
        <div className="close-btn">
            <FontAwesomeIcon icon={faClose} color='#6c62dd' />
        </div>
        <div className="navbar">
            <div className="navbar-options">
                <a href="" className='navbar-links active'><FontAwesomeIcon icon={faHouse} color='black' />Home</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faChartSimple} color='black' />Analytic</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faCompass} color='black' />Explore</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faBagShopping} color='black' />Shop</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faComment} color='black' />Inbox</a>
            </div>
            <div className="tools">
                <p>Tools</p>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faGear} color='black' />Setting</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faCircleQuestion} color='black' />Help</a>
            </div>
            <div className="projects">
                <p>Projects</p>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Amazon</a>
                <a href="" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Invinity HQ</a>
            </div>
        </div>
    </div>
  )
}
