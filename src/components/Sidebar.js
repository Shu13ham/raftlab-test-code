import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars, faHouse, faChartSimple, faCompass, faBagShopping, faComment, faGear, faCircleQuestion, faFolderClosed} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cancel, setCancel] = useState(false);
    const [click, setClick] = useState(false);
    const closeMenu = () =>{
        if(!cancel){
            setCancel(true);
            setClick(false);
        }
        else{
            setCancel(false);
            setClick(true);
        }
    }
    const openMenu = () =>{
        console.log('ssfsd')
        if(!click){
            setClick(true);
            setCancel(false);
        }
        else{
            setClick(false);
            setCancel(true);
        }
    }
  return (
    <>
        <div className={`sidebar ${click && !cancel ? 'show' : 'hide'}`}>
            <Link to="/" className="company-logo">
                <img src="img/logo.png" alt="" />
                <h1>Omoi</h1>
            </Link>
            <div className="close-btn">
                <button type='button' onClick={closeMenu}>
                    <FontAwesomeIcon icon={faClose} color='#6c62dd' />
                </button>
            </div>
            <div className="navbar">
                <div className="navbar-options">
                    <Link to="/" className='navbar-links active'><FontAwesomeIcon icon={faHouse} color='black' />Home</Link>
                    <Link to="/analytic" className='navbar-links'><FontAwesomeIcon icon={faChartSimple} color='black' />Analytic</Link>
                    <Link to="/explore" className='navbar-links'><FontAwesomeIcon icon={faCompass} color='black' />Explore</Link>
                    <Link to="/shop" className='navbar-links'><FontAwesomeIcon icon={faBagShopping} color='black' />Shop</Link>
                    <Link to="/inbox" className='navbar-links'><FontAwesomeIcon icon={faComment} color='black' />Inbox</Link>
                </div>
                <div className="tools">
                    <p>Tools</p>
                    <Link to="/setting" className='navbar-links'><FontAwesomeIcon icon={faGear} color='black' />Setting</Link>
                    <Link to="/help" className='navbar-links'><FontAwesomeIcon icon={faCircleQuestion} color='black' />Help</Link>
                </div>
                <div className="projects">
                    <p>Projects</p>
                    <Link to="/amazon" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Amazon</Link>
                    <Link to="/invinity" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Invinity HQ</Link>
                </div>
            </div>
        </div>
        <div className="hamburger">
            <button type='button' onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} color='#6c62dd' className='search'/>
            </button>
        </div>
    </>
  )
}
