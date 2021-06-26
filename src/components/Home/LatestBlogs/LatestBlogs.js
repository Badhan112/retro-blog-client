import React from 'react';
import BlogCard from '../../Shared/BlogCard/BlogCard';

const LatestBlogs = () => {
    const blogs = [
        {
            img: 'https://cdn.pixabay.com/photo/2021/05/10/10/46/yellow-wall-6243164_960_720.jpg',
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            publishDate: new Date(),
        },
        {
            img: 'https://cdn.pixabay.com/photo/2016/04/27/20/13/wind-power-1357419_960_720.jpg',
            title: 'Consectetur adipiscing elit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            publishDate: new Date(),
        },
        {
            img: 'https://cdn.pixabay.com/photo/2021/03/11/12/57/anemone-6087059_960_720.jpg',
            title: 'Sed do eiusmod tempor incididunt ut labore',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            publishDate: new Date(),
        },
        {
            img: 'https://cdn.pixabay.com/photo/2013/07/13/01/12/witch-155291_960_720.png',
            title: 'Ut enim ad minim veniam',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            publishDate: new Date(),
        }
    ];

    return (
        <section>
            <h3 className="text-3xl text-left md:text-center my-5">Latest Blogs</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.slice(blogs.length - 3, blogs.length).map(blog => <BlogCard blog={blog} />)
                }
            </div>
        </section>
    );
};

export default LatestBlogs;