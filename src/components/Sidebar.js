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
        <div className={`sidebar w-1/5 max-w-[230px] min-w-[140px] border-grey-lines ${click && !cancel ? 'show' : 'hide'}`}>
            <NavLink to="/" className="company-logo font-bold flex items-center">
                <img src="img/logo.png" alt="" className='w-1/5'/>
                <h1 className='text-2xl'>Omoi</h1>
            </NavLink>
            <div className="close-btn">
                <button type='button' onClick={closeMenu}>
                    <FontAwesomeIcon icon={faClose} color='#6c62dd' />
                </button>
            </div>
            <div className="navbar flex flex-col">
                <div className="navbar-options flex flex-col">
                    <NavLink to="/" className='navbar-links text-[#404449] font-medium text-sm' activeClassName="navbar__link--active"><FontAwesomeIcon className='text-lg text-[#404449]' icon={faHouse} color='black' />Home</NavLink>
                    <NavLink to="/analytic" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faChartSimple} color='black' />Analytic</NavLink>
                    <NavLink to="/explore" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faCompass} color='black' />Explore</NavLink>
                    <NavLink to="/shop" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faBagShopping} color='black' />Shop</NavLink>
                    <NavLink to="/inbox" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faComment} color='black' />Inbox</NavLink>
                </div>
                <div className="tools flex flex-col">
                    <p className='text-xs  font-medium text-grey-text'>Tools</p>
                    <NavLink to="/setting" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faGear} color='black' />Setting</NavLink>
                    <NavLink to="/help" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faCircleQuestion} color='black' />Help</NavLink>
                </div>
                <div className="projects flex flex-col">
                    <p className='text-xs  font-medium text-grey-text'>Projects</p>
                    <NavLink to="/amazon" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faFolderClosed} color='black' />Amazon</NavLink>
                    <NavLink to="/invinity" className='navbar-links text-[#404449] font-medium text-sm'><FontAwesomeIcon className='text-lg text-[#404449]' icon={faFolderClosed} color='black' />Invinity HQ</NavLink>
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
