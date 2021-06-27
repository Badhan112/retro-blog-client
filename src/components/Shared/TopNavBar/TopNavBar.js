import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../../App';

const TopNavBar = () => {
    const [isAdmin] = useContext(AdminContext);

    const handleClick = () => {
        const navItem = document.getElementById('nav-item');
        if(navItem.classList.contains('hidden')){
            navItem.classList.remove('hidden');
        } else{
            navItem.classList.add('hidden');
        }
    }

    return (
        <header className='md:px-16 lg:px-36 pt-5'>
            <div className='flex justify-between mx-3'>
                <h1 className='text-4xl'>Retro Blog</h1>
                <svg className="w-6 h-6 md:hidden" onClick={handleClick} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>
            <nav className='hidden md:block' id='nav-item'>
                <ul className='flex flex-col md:flex-row items-end md:justify-end'>
                    <li className='mt-3 mx-3'><Link className='p-3 bg-gray-200 rounded hover:bg-gray-400 hover:text-white hover:shadow transition ease-in-out duration-300 cursor-pointer' to='/home'>Home</Link></li>
                    {
                        isAdmin
                        ? <li className='mt-3 mx-3'><Link className='p-3 bg-gray-200 rounded hover:bg-gray-400 hover:text-white hover:shadow transition ease-in-out duration-300 cursor-pointer' to='/admin-panel' >Admin Panel</Link></li>
                        : <li className='mt-3 mx-3'><Link className='p-3 bg-gray-200 rounded hover:bg-gray-400 hover:text-white hover:shadow transition ease-in-out duration-300 cursor-pointer' to='/login' >Log In</Link></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default TopNavBar;