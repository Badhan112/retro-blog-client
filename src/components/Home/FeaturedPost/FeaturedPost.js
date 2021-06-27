import React, { useContext } from 'react';
import { BlogContext } from '../../../App';
import BlogCard from '../../Shared/BlogCard/BlogCard';

const FeaturedPost = () => {
    const [blogs] = useContext(BlogContext);

    return (
        <section className='mt-10 border-t-2 border-gray-200'>
            <h3 className="text-3xl text-left md:text-center my-5">Featured Blogs</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <BlogCard blog={blog} />)
                }
            </div>
        </section>
    );
};

export default FeaturedPost;