import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, image, content, publishDate } = blog;
    return (
        <div className='bg-white rounded-lg mx-2 overflow-hidden shadow-md hover:shadow-xl relative' >
            <img src={`data:${image.contentType};base64, ${image.img}`} alt={title} className='h-32 md:h-48 w-full object-cover cursor-pointer' />
            <div className='p-5'>
                <h3 className='text-xl font-semibold mb-3 hover:text-gray-800 cursor-pointer'>{title}</h3>
                <p>{content.slice(0, 120)} .......</p>
            </div>
            <p className='absolute top-0 right-0 bg-yellow-300 px-3 py-2 text-xs rounded-bl-lg'>{new Date(publishDate).toDateString('dd/mm/yyyy')}</p>
        </div>
    );
};

export default BlogCard;