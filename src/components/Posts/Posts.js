import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'
const Posts = () => {
    const getAllPosts = useLoaderData();
    return (
        <div>
            <div className='posts' >
                {
                    getAllPosts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;