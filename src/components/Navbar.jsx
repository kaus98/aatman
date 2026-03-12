import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX, HiOutlineHome, HiOutlinePhotograph, HiOutlineMail } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <button className="menu-btn" onClick={() => setIsOpen(true)}>
                        <HiMenuAlt4 className="menu-icon" />
                    </button>

                    <h1 className={`nav-logo-text ${scrolled ? 'visible' : ''}`}>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img src={`${import.meta.env.BASE_URL}ENGLISH-AATMAN-1024x322.png`} alt="Aatman Logo" className="navbar-logo" />
                        </Link>
                    </h1>
                </div>
            </nav>

            <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    <HiX className="close-icon" />
                </button>
                <ul className="nav-links">
                    <li><Link to="/" onClick={() => setIsOpen(false)}><HiOutlineHome /> Home</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsOpen(false)}><HiOutlinePhotograph /> Gallery</Link></li>
                    <li><Link to="/contact-space" onClick={() => setIsOpen(false)}><HiOutlineMail /> Contact Space</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
