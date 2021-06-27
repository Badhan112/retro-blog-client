import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import LatestBlogs from '../LatestBlogs/LatestBlogs';
import CardLoadingAnimation from '../../Shared/CardLoadingAnimation/CardLoadingAnimation';

const Home = () => {
    return (
        <>
            <TopNavBar />
            <main className='md:px-16 lg:px-36 pb-20'>
                <CardLoadingAnimation />
                <LatestBlogs />
            </main>
        </>
    );
};

export default Home;