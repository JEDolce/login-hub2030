import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';


export const Intro = () => {
    const navigate = useNavigate();

    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

    }, [user, navigate])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1 style={{ textTransform: "capitalize" }}>Welcome {user && user.userName}</h1>
                <p>Info</p>
            </section>
            <section className='content'>

            </section>
        </>
    )
}
