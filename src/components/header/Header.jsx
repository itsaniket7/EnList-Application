import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/tmovie.png';
import { UserAuth } from '../../context/AuthContext';


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
    },
];

const Header = () => {
    
    const { user, logOut } = UserAuth() ;
    const navigate = useHistory()

    const handleLogout = async () => {
        try {
          await logOut();
          navigate.push("/");
        } catch (error) {
          console.log(error);
        }
      };

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);
    

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollHeight > 700){
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    headerRef.current.classList.add('shrink');
                } else {
                    headerRef.current.classList.remove('shrink');
                }
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
                {user?.email ? (
                    <div>
                        <Link to="/Account">
                        <button class="sign_in" role="button">Account</button>
                        </Link>
                            <div class="space"></div>
                        <Link to="/">
                            <button onClick={handleLogout} class="sign_up" role="button">Logout</button>
                        </Link>
                            <div className="user-pic">
                                <img src={localStorage.getItem("profilePic")} alt="" onclick="toggleMenu()"/>
                            </div>
                    </div>
                ) : (
                    <div>
                        <Link to="/Login">
                        <button class="sign_in" role="button">Sign In</button>
                        </Link>
                            <div class="space"></div>
                        <Link to="/Signup">
                            <button class="sign_up" role="button">Sign Up</button>
                        </Link>
                    </div>
                )}

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
