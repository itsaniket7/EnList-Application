import React from 'react';
import SavedShows from '../components/SavedShows/SavedShows';
import PlanShows from '../components/PlanShows/PlanShows';
import bg from '../assets/footer-bg.jpg';
import logo from '../assets/tmovie.png';
import { Link } from 'react-router-dom';

import "./account.scss";

const Account = () => {
  return (
    <>
      {/* <div className="logo12">
                        <img src={logo} alt="" />
                        <Link to="/">En-List</Link>
      </div> */}
      <div className='Acc_h1'>
        <img
          className='img11'
          src='https://wallpapercave.com/wp/wp10615928.jpg'
          alt='/'
        />
        <div className='div1'></div>
        <div className='div2'>
          <h1 className='h11'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
      <PlanShows/>
    </>
  );
};

export default Account;