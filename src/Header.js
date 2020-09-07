import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return(
        <nav className="header">

            {/* logo on left */}
        <Link to="/">
            <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            className="header__logo" 
            alt=""
            />

        </Link>

        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
        </div>
          

            {/* search box */}
            {/* links on right */}
            {/* cart icon with count */}
        </nav>
    )
}

export default Header;