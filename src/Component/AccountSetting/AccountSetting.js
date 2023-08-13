import React from 'react';
import './AccountSetting.css';
import profileImg from '../../image/profileImg.png';
import cameraPng from '../../image/cameraPng.png';

const AccountSetting = () => {
    return (
        <div className='accountSetting'>
            <div className='settingName'>
                <p>Account Settings</p>
            </div>
            <div className='settingProfile'>
                <div className='profile'>
                    <div className='upload'>
                        <img className='showImg' src={profileImg} alt="" />
                        <div className='uploadInput'>
                            <img src={cameraPng} alt="" />
                            <input className='imgInput' type="file" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <span className='profileName'>Marry Doe</span><br />
                        <span className=''>Marry@Gmail.Com</span>
                    </div>
                </div>
                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
            <div className='empty'>

            </div>
        </div>
    );
};

export default AccountSetting;