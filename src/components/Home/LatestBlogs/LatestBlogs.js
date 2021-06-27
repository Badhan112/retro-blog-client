import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../../App';
import BlogCard from '../../Shared/BlogCard/BlogCard';
import CardLoadingAnimation from '../../Shared/CardLoadingAnimation/CardLoadingAnimation';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useContext(BlogContext);
    const [isFetchData, setIsFetchData] = useState(false);

    useEffect(() => {
        setIsFetchData(true);
        fetch('https://sleepy-stream-47833.herokuapp.com/blogs')
            .then(res => res.json())
            .then(documents => {
                setBlogs(documents);
                setIsFetchData(false);
            })
            .catch(err => {
                alert(err);
            })
    }, [setBlogs]);

    return (
        <section>
            <h3 className="text-3xl text-left md:text-center my-5">Latest Blogs</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    isFetchData
                        ? <CardLoadingAnimation />
                        : blogs.slice(blogs.length - 3, blogs.length).map(blog => <BlogCard blog={blog} />)
                }
            </div>
        </section>
    );
};

export default LatestBlogs;