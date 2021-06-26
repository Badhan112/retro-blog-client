import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import LatestBlogs from '../LatestBlogs/LatestBlogs';

const Home = () => {
    return (
        <>
            <TopNavBar />
            <main className='md:px-16 lg:px-36 pb-20'>
                <LatestBlogs />
            </main>
        </>
    );
};

export default Home;