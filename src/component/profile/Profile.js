import React from 'react'
import { Element } from 'react-scroll'
import profileimg from '../asset/profileimg.jpg';
import './Profile.css'
const Profile = () => {
    return (
        <Element id='home'>
            <section className='profile'>
                <div className='profile-container'>
                    <div className='detail-container'>
                        <h3>musharaf vd</h3>
                        <p>i am  Frontend Developer </p>
                        <p>Creating responsive, user-friendly websites</p>
                    </div>

                    <div className='profileimg-container'>
                        <img src={profileimg} />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Profile