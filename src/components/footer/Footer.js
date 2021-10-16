import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/netflix.png';

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Investor Relations</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Speed Test</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Help Center</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Cookie Preferences</Link>
                        <Link to="/">Legal Notices</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Account</Link>
                        <Link to="/">Ways to Watch</Link>
                        <Link to="/">Corporate Information</Link>
                        <Link to="/">Only on Netflix</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Media Center</Link>
                        <Link to="/">Terms of Use</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                </div>
                <div className="footer__content__copyright">
                    <p>© 2021 Netflix ❤️</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
