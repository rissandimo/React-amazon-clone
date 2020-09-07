import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav className="header">
        <Link to="/">
            <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            className="header__logo" 
            alt=""
            />

        </Link>
          
            {/* logo on left */}

            {/* search box */}
            {/* links on right */}
            {/* cart icon with count */}
        </nav>
    )
}

export default Header;