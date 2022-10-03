import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleUser.css'
const SingleUser = () => {
    const singleUserData = useLoaderData();
    console.log(singleUserData);
    const {name , username,email,address} = singleUserData;
    const {street , suite} = address;
    return (
        <div className='single'>
            <h2>Name:{name}</h2>
            <h2>UserName:{username}</h2>
            <h2>Email:{email}</h2>
            <h2>Street:{street}</h2>
            <h2>suite:{suite}</h2>
        </div>
    );
};

export default SingleUser;