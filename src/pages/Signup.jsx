import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/tmovie.png';
import GoogleButton from "react-google-button";
import bg from '../assets/footer-bg.jpg';
import "./login.scss";
import { signInWithGoogle } from '../firebase';

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = UserAuth();
  const navigate = useHistory();
  
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signUp(name,email, password);
      navigate.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  const handleGoogleSignIn = async (e) => {
    
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <div  class="container121" style={{backgroundImage: `url(${bg})`}}>
            <div className="logo12">
                        <img src={logo} alt="" />
                        <Link to="/">En-List</Link>
            </div>
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    {error ? <p className='error'>{error}</p> : null}
                    <div class="form-group">
                        <input onChange={(e) => setName(e.target.value)} type="text" required/>
                        <label>Name</label>
                    </div>
                    <div class="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required/>
                        <label>Email</label>
                    </div>
                    <div class="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} type={type}required/>
                        <label>Password</label>
                        <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                    </div>
                    <button>Sign Up</button>
                    <hr />
                    <span></span>
                    <div>
                      <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                      />
                    </div>
                    <div class="signup">
                        <p>Already subscribed to En-List?  <Link to='/login'>Sign In</Link></p>
                    </div>
                </form>
            </div>
            </div>
  );
};

export default Signup;