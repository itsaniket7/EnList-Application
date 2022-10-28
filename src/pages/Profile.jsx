import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import logo from '../assets/tmovie.png';
// import bg from '../assets/footer-bg.jpg';
import "./profile.scss";
const Profile = () => {
    return (
      <>
        <div className="logo12">
                        <img src={logo} alt="" />
                        <Link to="/">En-List</Link>
        </div>
        <aside class="profile-card">
            
            <header>
            
                <a href="http://kanishkkunal.in">
                <img src="https://0.gravatar.com/avatar/bb9bf20fb6f55b4af10b0f98c540075f?s=150"/>
                </a>

                <h1>Kanishk Kunal</h1>
                
                <h2>Web & Mobile Developer</h2>
                
            </header>
            
            <div class="profile-bio">
                
                <p>Kanishk is a passionate developer & blogger who devotes most of his time punching his keyboard and swiping his smartphone.</p>
                
            </div>
            
            <ul class="profile-social-links">
                
                <li>
                <a href="https://twitter.com/kanihkkunal">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
                </a>
                </li>
                
                <li>
                <a href="http://themeforest.net/user/kanishkkunal">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
                </a>
                </li>
                
                <li>
                <a href="https://codepen.io/kanishkkunal">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
                </a>
                </li>
                                
            </ul>
            
            </aside>
      </>
    );
  };
  
export default Profile;
