import React from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {name , id , username, email} = user;
    const navigation = useNavigate();
    const handleSingleUser = ()=>{
        navigation(`/users/${id}`);
    }
    return (
        <div className='user'>
            <h2>UserID :{id}</h2>
            <h2>User Name :{name}</h2>
            <h2>User Email :{email}</h2>
            <h2>UserName:{username}</h2>
            <button onClick={handleSingleUser}>Load User</button>
        </div>
    );
};

export default User;