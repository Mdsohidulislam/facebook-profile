import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="header">
                <h1>Welcome to BOESL</h1>
                <h3>Bangladeshi largest employee service limited</h3>
            </div>
            <nav>
                <a href="/nav">Our worker</a>
                <a href="/nav">Your hire people</a>
                <a href="/nav">About us</a>
            </nav>
        </div>
    );
};

export default Navbar;