import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars, faHouse, faChartSimple, faCompass, faBagShopping, faComment, faGear, faCircleQuestion, faFolderClosed} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/" className="company-logo">
                <img src="img/logo.png" alt="" />
                <h1>Omoi</h1>
            </NavLink>
            <div className="close-btn">
                <button type='button' onClick={closeMenu}>
                    <FontAwesomeIcon icon={faClose} color='#6c62dd' />
                </button>
            </div>
            <div className="navbar">
                <div className="navbar-options">
                    <NavLink to="/" className='navbar-links' activeClassName="navbar__link--active"><FontAwesomeIcon icon={faHouse} color='black' />Home</NavLink>
                    <NavLink to="/analytic" className='navbar-links'><FontAwesomeIcon icon={faChartSimple} color='black' />Analytic</NavLink>
                    <NavLink to="/explore" className='navbar-links'><FontAwesomeIcon icon={faCompass} color='black' />Explore</NavLink>
                    <NavLink to="/shop" className='navbar-links'><FontAwesomeIcon icon={faBagShopping} color='black' />Shop</NavLink>
                    <NavLink to="/inbox" className='navbar-links'><FontAwesomeIcon icon={faComment} color='black' />Inbox</NavLink>
                </div>
                <div className="tools">
                    <p>Tools</p>
                    <NavLink to="/setting" className='navbar-links'><FontAwesomeIcon icon={faGear} color='black' />Setting</NavLink>
                    <NavLink to="/help" className='navbar-links'><FontAwesomeIcon icon={faCircleQuestion} color='black' />Help</NavLink>
                </div>
                <div className="projects">
                    <p>Projects</p>
                    <NavLink to="/amazon" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Amazon</NavLink>
                    <NavLink to="/invinity" className='navbar-links'><FontAwesomeIcon icon={faFolderClosed} color='black' />Invinity HQ</NavLink>
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
