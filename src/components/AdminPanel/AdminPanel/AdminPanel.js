import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import ManageBlog from '../ManageBlog/ManageBlog';
import NewBlogForm from '../NewBlogForm/NewBlogForm';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { Route, useRouteMatch } from 'react-router-dom';

const AdminPanel = () => {
    const { url } = useRouteMatch();

    return (
        <>
            <TopNavBar />
            <main className='mt-5 md:px-16 lg:px-36 pb-20 grid md:grid-cols-3 xl:grid-cols-4 gap-8'>
                <AdminSideBar />

                <Route exact path={`${url}/`}>
                    <NewBlogForm />
                </Route>
                <Route path={`${url}/add-blog`}>
                    <NewBlogForm />
                </Route>
                <Route path={`${url}/manage-blogs`}>
                    <ManageBlog />
                </Route>
            </main>
        </>
    );
};

export default AdminPanel;