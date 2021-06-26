import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const AdminPanel = () => {
    return (
        <>
            <TopNavBar />
            <main className='md:px-16 lg:px-36 pb-20'>
                <h3 className="text-3xl">Post A New Blog</h3>
                <form action="">
                    <input type="text" name="" id="" placeholder='Blog Title' className='my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Blog Content' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    <input type="file" name="" id="" className='block' />
                    <button type="submit" className='bg-green-600 rounded-md px-3 py-1 m-2 text-white'>Post</button>
                </form>
            </main>
        </>
    );
};

export default AdminPanel;