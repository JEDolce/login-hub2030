import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset, register } from '../redux/authSlice';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

export const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        passwordCheck: ""
    });

    const { userName, email, password, passwordCheck } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error('Error')
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [isSuccess, isError, user, message, dispatch, navigate])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            toast.error('Passwords do not match!')
        } else {
            const userData = {
                userName,
                email,
                password
            };

            dispatch(register(userData))
        }
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create an account</p>
            </section>
            <section>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id='username'
                            name='userName'
                            placeholder="Enter username"
                            value={userName}
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder="Enter your email"
                            value={email}
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={password}
                            placeholder="Enter password"
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id='passwordCheck'
                            name='passwordCheck'
                            value={passwordCheck}
                            placeholder="Confirm password"
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
