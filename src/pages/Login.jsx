import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/tmovie.png';
import bg from '../assets/footer-bg.jpg';
import GoogleButton from "react-google-button";

import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { googleSignIn, logIn} = UserAuth();
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div class="container121" style={{backgroundImage: `url(${bg})`}}>
            <div className="logo12">
                        <img src={logo} alt="" />
                        <Link to="/">En-List</Link>
            </div>
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    {error ? <p className='error'>{error}</p> : null}
                    <div class="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required/>
                        <label>Email</label>
                    </div>
                    <div class="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" required/>
                        <label>Password</label>
                    </div>
                    <button>Sign In</button>
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
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
    </div>
  );
};

export default Login;