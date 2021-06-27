import React, { useContext } from 'react';
import { BlogContext } from '../../../App';

const AdminBlogCard = ({ blog }) => {
    const [blogs, setBlogs] = useContext(BlogContext);

    const { _id, image, title, content, publishDate } = blog;

    const handleDelete = id => {
        fetch(`http://localhost:5100/delete-blog/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Successfully Deleted');
                } else {
                    alert('Unexpected Error');
                }

                fetch('http://localhost:5100/blogs')
                    .then(res => res.json())
                    .then(documents => setBlogs(documents));
            })
            .catch(() => alert('Unexpected Error'));
    }

    return (
        <div className='m-3 bg-white flex flex-col lg:flex-row rounded-lg overflow-hidden'>
            <img src={`data:${image.contentType};base64, ${image.img}`} alt={title} className='lg:w-56 object-cover' />
            <div className='p-3'>
                <h3 className='text-3xl text-gray-700'>{title}</h3>
                <p className='my-5'>{content}</p>
                <p className='text-sm'>{new Date(publishDate).toDateString('dd/mm/yyyy')}</p>
                <button onClick={() => handleDelete(_id)} className='bg-red-600 px-3 py-1 mt-5 rounded-md text-white'><svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Delete</button>
            </div>
        </div>
    );
};

export default AdminBlogCard;