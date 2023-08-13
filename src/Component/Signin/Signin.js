import React from 'react';
import './Signin.css';
import { useNavigate } from 'react-router';

const Signin = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/accountSetting')
    }

    return (
        <div className='signIn'>
            <h2>Signin to your <br /> PopX account</h2>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <input type="email" required placeholder='Enter email address' />
                    <span className='labelTypeTwo'>Email Address<small className='star'>*</small></span>
                </div>

                <div className='inputField'>
                    <input type="password" required placeholder='Enter password' />
                    <span className='labelTypeOne'>Password<small className='star'>*</small></span>
                </div>

                <input className='submitButton' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Signin;