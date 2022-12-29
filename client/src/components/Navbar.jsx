import React from 'react';
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaUser
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../redux/authSlice';


export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>Intro</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>) : (
                    <>
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
                    </>
                )}
            </ul>
        </div>
    )
}
