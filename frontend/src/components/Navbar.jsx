import React from 'react';
import './Navbar.css';
import TestLogo from '../assets/TestLogo.png';
import home from '../assets/home.png';
import group from '../assets/group.png';
import calendar from '../assets/calendar.png';
import chat from '../assets/chat.png';
import credit_card from '../assets/credit_card.png';
import doctor from '../assets/senior-woman-doctor.png';
import setting from '../assets/settings.svg';
import more from '../assets/more_vert.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={TestLogo} alt="test logo" />

            <ul className='nav_links'>
                <li className='nav_item'>
                    <a href="#">
                        <img src={home} alt="Test Logo" />
                        <p>Overview</p>
                    </a>
                </li>
                <li className='nav_item patient'>
                    <a href="#">
                        <img src={group} alt="Test Logo" />
                        <p>Patients</p>
                    </a>
                </li>
                <li className='nav_item'>
                    <a href="#">
                        <img src={calendar} alt="Test Logo" />
                        <p>Schedule</p>
                    </a>
                </li>
                <li className='nav_item'>
                    <a href="#">
                        <img src={chat} alt="Test Logo" />
                        <p>Message</p>
                    </a>
                </li>
                <li className='nav_item'>
                    <a href="#">
                        <img src={credit_card} alt="Test Logo" />
                        <p>Transactions</p>
                    </a>
                </li>
            </ul>

            <div className="doctor">
                <img src={doctor} alt="doctor" />
                <div className="doc_details">
                    <h4>Dr.Jose Simmons</h4>
                    <p>General Practitioner</p>
                </div>
                <div className="vertical-line"></div>
                <div className="setting">
                    <img src={setting} alt="settings" />
                    <img src={more} alt="more" />

                </div>
            </div>



        </div>
    )
}

export default Navbar;