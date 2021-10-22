import React, {useState, useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);
    return (
        <div>
            
            <div className='row container mx-auto mt-5'>
            <h5 className='fst-italic mt-5 text-center pt-5'>
                Our daily Blogs
            </h5>
            {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
          }
            </div>

        </div>
    );
};

export default Blogs;