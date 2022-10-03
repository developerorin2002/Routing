import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div className='users'>
            {
                users.map(user=><User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;