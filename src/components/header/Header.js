import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

import logo from '../../assets/netflix.png';

import icon from '../../assets/icon.png'

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
                <div className="header__left">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
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
                </div>
                <div className="header__right">
                    <div className="icon-right">
                        <i className='bx bx-gift' ></i>
                        <span className="dot"></span>
                    </div>
                    <div className="icon-right">
                        <i className='bx bxs-bell'></i>
                        <span className="dot"></span>
                    </div>
                    <div className="profile">
                        <img src={icon} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;