import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardLoadingAnimation from '../../Shared/CardLoadingAnimation/CardLoadingAnimation';

const NewBlogForm = () => {
    const [newBlog, setNewBlog] = useState({});
    const [blogImg, setBlogImg] = useState(null);
    const [isfetchData, setIsfetchData] = useState(false);
    const history = useHistory();

    const handleInput = event => {
        const blog = { ...newBlog };
        blog[event.target.name] = event.target.value;
        setNewBlog(blog);
    }

    const handleImgInput = event => {
        const img = event.target.files[0];
        setBlogImg(img);
    }

    const handleSubmit = event => {
        setIsfetchData(true);
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', blogImg);
        formData.append('title', newBlog.title);
        formData.append('content', newBlog.content);
        formData.append('publishDate', new Date());

        fetch('https://sleepy-stream-47833.herokuapp.com/add-blog', {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Blog Added');
                } else {
                    alert('Unexpected Error');
                }
                setIsfetchData(false);
                history.push('/admin-panel/manage-blogs');
            })
            .catch(() => {
                alert('Unexpected Error');
                setIsfetchData(false);
            });
    }

    return (
        <section className='md:col-span-2 xl:col-span-3'>
            <h3 className="text-3xl">Post A New Blog</h3>
            {
                isfetchData
                    ? <CardLoadingAnimation />
                    : <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleInput} name="title" placeholder='Blog Title' className='my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                        <textarea name="content" onBlur={handleInput} cols="30" rows="10" placeholder='Blog Content' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        <input type="file" onChange={handleImgInput} name="img" className='block' />
                        <button type="submit" className='bg-green-600 rounded-md px-3 py-1 m-2 text-white'>Post</button>
                    </form>
            }
        </section>
    );
};

export default NewBlogForm;