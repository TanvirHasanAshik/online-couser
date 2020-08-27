import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/onlineCourse">OnlineCourse</a>
                <a href="/review">Review</a>
                <a href="/about">About</a>
            </nav>
        </div>
        
    );
};

export default Header;