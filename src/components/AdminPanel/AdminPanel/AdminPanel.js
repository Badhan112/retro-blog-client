import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import NewBlogForm from '../NewBlogForm/NewBlogForm';

const AdminPanel = () => {
    return (
        <>
            <TopNavBar />
            <main className='md:px-16 lg:px-36 pb-20'>
                <NewBlogForm />
            </main>
        </>
    );
};

export default AdminPanel;