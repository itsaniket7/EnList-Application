import React from 'react';

import './about.scss';
import vaibhav from '../../assets/vaibhavi.jpg';
import Aniket from '../../assets/aniket.jpg';
import tejas from '../../assets/tejas.jpg';
import bg from '../../assets/footer-bg.jpg';

const about = () => {
    return (
        <div class="container12" style={{backgroundImage: `url(${bg})`}}>
        {/* // <div class="container12"> */}
        <div class="header12">
            <h1>Our Team</h1>
        </div>
        <div class="sub-container12">
            
        <div class="teams12">
                <img src={tejas} alt=""/>
                <div class="name12">Tejas Vaidya </div>
                <div class="desig12">Developer</div>
                {/* <div class="about12">SPIT student</div> */}

                <div class="social-links12">
                    <a href="https://www.linkedin.com/in/tejas-vaidya-71a9a01a7/"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/tejas_4522/"><i class="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/TejasVa31694343"><i class="fa fa-twitter"></i></a>
                    <a href="https://github.com/Tejas1140"><i class="fa fa-github"></i></a>
                </div>
            </div>

            <div class="teams12">
                <img src={Aniket} alt=""/>
                <div class="name12">Aniket Sawant</div>
                <div class="desig12">Developer</div>
                {/* <div class="about12"> SPIT Student </div> */}

                <div class="social-links12">
                    <a href="https://www.linkedin.com/in/aniket-sawant-80b649206/"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>
            
            <div class="teams12">
                <img src={vaibhav} alt=""/>
                <div class="name12">Vaibhav Udamale </div>
                <div class="desig12">Designer</div>
                {/* <div class="about12"> SPIT student</div> */}

                <div class="social-links12">
                    <a href="https://www.linkedin.com/in/vaibhav-udamale-5824b51b0/"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>

        </div>
    </div>
    );
}

export default about;
