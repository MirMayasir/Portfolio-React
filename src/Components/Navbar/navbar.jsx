import React, { useState } from 'react';

const navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div id="nav-bar">
            <div className="name">
                <h2>MIR MAYASIR</h2>
            </div>
            <a href="#" className="navigation" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`nav-bar-links ${isActive ? 'active' : ''}`}>
                <h3><a href="index.html">Home</a></h3>
                <span className="span-line">|</span>
                <h3><a href="experience.html">Experience</a></h3>
                <span className="span-line">|</span>
                <h3><a href="education.html">Education</a></h3>
                <span className="span-line">|</span>
                <h3><a href="projects.html">Projects</a></h3>
                <span className="span-line">|</span>
                <h3><a href="contact.html">Contact</a></h3>
            </div>
        </div>
    );
}

export default navbar;
