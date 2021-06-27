import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import LogInForm from '../LogInForm/LogInForm';

const LogIn = () => {
    return (
        <>
            <TopNavBar />
            <main className='md:px-16 lg:px-36 pb-20' >
                <LogInForm />
            </main>
        </>
    );
};

export default LogIn;