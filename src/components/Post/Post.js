import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {userId,id , title,body} = post;
    console.log(post)
    const authorNavigate = useNavigate()
    const findAuthor = ()=>{
        authorNavigate(`/users/${userId}`);
    }
    return (
        <div className='post'>
            <h2>User ID ; {id}</h2>
            <h2>Title : {title}</h2>
            <h2>Body Msg ; {body}</h2>
            <button onClick={findAuthor}>Get Author</button>
        </div>
    );
};

export default Post;