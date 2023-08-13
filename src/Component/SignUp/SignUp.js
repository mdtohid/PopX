import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/accountSetting')
    }
    return (
        <div className='signUp'>
            <h2>Create your <br /> PopX account</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className='inputField'>
                        <input placeholder='Enter name' required type="text" />
                        <span className='labelTypeOne'>Full Name<small className='star'>*</small></span>
                    </div>

                    <div className='inputField'>
                        <input placeholder='Enter number' required type="number" />
                        <span className='labelTypeTwo'>Phone number<small className='star'>*</small></span>
                    </div>

                    <div className='inputField'>
                        <input placeholder='Enter email address' required type="email" />
                        <span className='labelTypeTwo'>Email address<small className='star'>*</small></span>
                    </div>

                    <div className='inputField'>
                        <input placeholder='Enter password' required type="password" />
                        <span className='labelTypeOne'>Password<small className='star'>*</small></span>
                    </div>

                    <div className='inputField'>
                        <input placeholder='Enter company name' required type="text" />
                        <span className='labelTypeTwo'>Company name<small className='star'>*</small></span>
                    </div>

                    <span className=''>Are you an Agency?<small className='star'>*</small></span>
                    <div className='radioInputs'>
                        <div className='radioInput'>
                            <input type="radio" id='yes' name="agency" value="Yes" required />
                            <label for="yes">Yes</label>
                        </div>

                        <div className='radioInput'>
                            <input type="radio" id='no' name="agency" value="No" required/>
                            <label for="no">No</label> <br />
                        </div>
                    </div>
                </div>
                <input className='submitButton' type="submit" value="Create Account" />
            </form>
        </div>
    );
};

export default SignUp;