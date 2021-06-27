import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../../App';
import AdminBlogCard from '../AdminBlogCard/AdminBlogCard';

const ManageBlog = () => {
    const [blogs, setBlogs] = useContext(BlogContext);

    useEffect(() => {
        fetch('http://localhost:5100/blogs')
            .then(res => res.json())
            .then(documents => setBlogs(documents));
    }, [setBlogs]);

    return (
        <section className='md:col-span-2 xl:col-span-3'>
            {
                blogs.map(blog => <AdminBlogCard blog={blog} key={blog._id} />)
            }
        </section>
    );
};

export default ManageBlog;