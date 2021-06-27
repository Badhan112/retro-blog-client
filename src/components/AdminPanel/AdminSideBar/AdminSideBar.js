import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const AdminSideBar = () => {
    const { url } = useRouteMatch();
    
    return (
        <aside className='bg-gray-800 text-gray-50'>
            <ul className='m-3 flex flex-row md:flex-col '>
                <li className='py-5 pl-5'><Link to={`${url}/add-blog`} className='bg-gray-400 p-3 rounded'>Add Blog</Link></li>
                <li className='py-5 pl-5'><Link to={`${url}/manage-blogs`} className='bg-gray-400 p-3 rounded'>Manage Blogs</Link></li>
            </ul>
        </aside>
    );
};

export default AdminSideBar;