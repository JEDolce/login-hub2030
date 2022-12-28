import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordCheck: ""
    });

    const { username, email, password, passwordCheck } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create an account</p>
            </section>
            <section>
                <form className='form'>
                    <div className="form-group">
                        <input
                            type="text"
                            id='username'
                            name='username'
                            value={username}
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id='email'
                            name='email'
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
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block' onSubmit={onSubmit}>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
