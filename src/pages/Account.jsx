import React from 'react';
import SavedShows from '../components/SavedShows/SavedShows';
import bg from '../assets/footer-bg.jpg';
import logo from '../assets/tmovie.png';
import { Link } from 'react-router-dom';

import "./account.scss";

const Account = () => {
  return (
    <>
      <div className="logo12">
                        <img src={logo} alt="" />
                        <Link to="/home">En-List</Link>
      </div>
      <div className='Acc_h1'>
        
        <img
          className='img11'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='div1'></div>
        <div className='div2'>
          <h1 className='h11'>My Account</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;