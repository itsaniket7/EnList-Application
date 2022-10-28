import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import './header.scss';
import logo from '../../assets/tmovie.png';
import { UserAuth } from '../../context/AuthContext';
import tejas from '../../assets/tejas.jpg';
import users from '../../assets/user.png';
import edit from '../../assets/edit.png';
import inbox from '../../assets/envelope.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/log-out.png';
import help from '../../assets/question.png';
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

    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    // const Menus = ['Profile', 'My Account', 'Logout'];

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
        // let handler = (e)=>{
        //     if(!menuRef.current.contains(e.target)){
        //       setOpen(false);
        //       console.log(menuRef.current);
        //     }      
        // };

        window.addEventListener('scroll', shrinkHeader);
        // document.addEventListener("mousedown", handler);
        return () => {
            // document.removeEventListener("mousedown", handler);
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
                        <div className='menu-container' ref={menuRef}>
                            <div className="user-pic" onClick={()=>{setOpen(!open)}}>
                                    <img id="image" src={localStorage.getItem("profilePic")} alt="" />
                            </div>
                            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                                <h4>{localStorage.getItem("name")}</h4>
                                <ul>
                                    <Link to="profile"><DropdownItem img = {users} text = {"My Profile"}/></Link>
                                    <Link to="account"><DropdownItem img = {edit} text = {"Watchlist"}/></Link>
                                    {/* <DropdownItem img = {inbox} text = {"Inbox"}/>
                                    <DropdownItem img = {settings} text = {"Settings"}/>
                                    <DropdownItem img = {help} text = {"Helps"}/> */}
                                    <Link to="/" onClick={handleLogout}><DropdownItem img = {logout} text = {"Logout"}/></Link>
                                </ul>
                            </div>  
                        </div>
                            {/* <div className="user-pic">
                                <img id="image" src={localStorage.getItem("profilePic")} alt="" onClick={()=>setOpen(!open)}/>
                                {
                                    open &&(
                                
                                <div className='dropdown'>
                                    <ul>
                                        {
                                            Menus.map((menu)=>(
                                                <li onClick={()=>setOpen(false)} classname="li1" key={menu}>
                                                    {menu}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                )}   
                            </div> */}
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

                        {/* <div class="sub-menu-wrap" id="subMenu">
                            <div class="sub-menu">
                                <div class="user-info">
                                    <img src="images/user.png"/>
                                    <h3> Tejas Vaidya </h3>
                                </div>

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
                        </div> */}
            </div>
        </div>
        
    );
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
}

export default Header;
