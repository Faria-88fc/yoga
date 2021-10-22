import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {title,id, img,type} = props.blog;
    return (
        <div className='col-sm-4 g-4 mb-3 blog'>
            <div className='card '>
                <div class="card bg-dark text-dark fw-bold">
                    <img className='opacity-75' src={img} class="card-img" alt="..."/>
                    <div class ="card-img-overlay  mt-5">
                    <h5 class ="card-title text-success fs-4">{id}</h5>
                    <p class ="card-text text-gray fs-3">{title}</p>
                    <small class ="card-text text-mute">type:{type}</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;