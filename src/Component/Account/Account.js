import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='account'>
            <div>
                <h2>Welcome to PopX</h2>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
                <Link className='accountButton' to='/signUp'>Create Account</Link>
                <Link className='accountButton' to='/signin'>Already Registered? Login</Link>
            </div>
        </div>
    );
};

export default Account;