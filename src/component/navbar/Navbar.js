import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className='nav-bar'>
            <div className='navbarheading-container'>
                <Link to='home' smooth={true} duration={200}>
                    <h5>home</h5>
                </Link>

                <Link to='about' smooth={true} duration={200}>
                    <h5>about</h5>
                </Link>

                <Link to='skill' smooth={true} duration={200}>
                    <h5>skill</h5>
                </Link>

                <Link to='project' smooth={true} duration={200}>
                    <h5>project</h5>
                </Link>

                <Link to='contact' smooth={true} duration={200}>
                    <h5>contact</h5>
                </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='hamburger' onClick={handleToggle}>
                <div className={menuOpen ? 'bar toggle' : 'bar'}></div>
                <div className={menuOpen ? 'bar toggle' : 'bar'}></div>
                <div className={menuOpen ? 'bar toggle' : 'bar'}></div>
            </div>

            {/* Mobile Navbar */}
            <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                <Link to='home' smooth={true} duration={200} onClick={handleToggle}>
                    <h5>home</h5>
                </Link>
                <Link to='about' smooth={true} duration={200} onClick={handleToggle}>
                    <h5>about</h5>
                </Link>
                <Link to='skill' smooth={true} duration={200} onClick={handleToggle}>
                    <h5>skill</h5>
                </Link>
                <Link to='project' smooth={true} duration={200} onClick={handleToggle}>
                    <h5>project</h5>
                </Link>
                <Link to='contact' smooth={true} duration={200} onClick={handleToggle}>
                    <h5>contact</h5>
                </Link>
            </div>
        </section>
    );
}

export default Navbar;
