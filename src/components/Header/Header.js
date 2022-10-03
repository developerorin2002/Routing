import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/dashboard'>User Dashboard</Link>
        </div>
    );
};

export default Header;