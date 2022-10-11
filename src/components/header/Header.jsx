import React, { useRef, useEffect } from 'react';
import { Button1 } from '../button/Button';
import tejas from '../../assets/tejas.jpg';



import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">En-List</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                {/* <div className="login_nav">
                        <Link to="/Login">
                            <Button1 className="signin">Sign In</Button1>
                        </Link>
                        <div class="space">
                        </div>
                        <Link to="/#">
                            <Button1 className="signup">Sign Up</Button1>
                        </Link>
                </div> */}
                <div>
                   <button class="sign_in" role="button">Sign In</button>
                    <div class="space"></div>
                    <button class="sign_up" role="button">Sign Up</button>
                    {/* <div class="space1"></div> */}
                    <div className="user-pic">
                        <img src={tejas} alt="" onclick="toggleMenu()"/>
                    </div>
                </div>
                <div class="sub-menu-wrap" id="subMenu">
                <div class="sub-menu">
                    <div class="user-info">
                        <img src="images/user.png"/>
                        <h3> Tejas Vaidya </h3>
                    </div>
                    {/* <hr> */}

                    <a href="#" class="sub-menu-link">
                        <img src="images/profile.png"/>
                        <p>Edit Profile</p>
                        <span> - </span>
                    </a>

                    <a href="#" class="sub-menu-link">
                        <img src="images/setting.png"/>
                        <p>Settings and Privacy</p>
                        <span> - </span>
                    </a>

                    <a href="#" class="sub-menu-link">
                        <img src="images/help.png"/>
                        <p>Help & Support</p>
                        <span> - </span>
                    </a>

                    <a href="#" class="sub-menu-link">
                        <img src="images/logout.png"/>
                        <p>Logout</p>
                        <span> -</span>
                    </a>

                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;
