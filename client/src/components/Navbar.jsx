import React from 'react';
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaUser
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const onLogout = () => {

    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>Intro</Link>
            </div>
            <ul>
                <li>
                    <button className='btn' onClick={onLogout}>
                        <FaSignOutAlt /> Logout
                    </button>
                </li>
                <li>
                    <Link to='./login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='./register'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </div>
    )
}
