import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

import { auth } from './firebase';

function Header(){

    const login = () => {
        if(user){
            auth.signOut();
        }
    };

    const [{ basket, user }] = useStateValue();
    return(
        <nav className="header">

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

        <div className="header__nav">

            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
                <span className="header__option1">Hello {user?.email}</span>
                <span className="header__option2">{user ? 'Sign Out': 'Sign In'}</span>
            </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <span className="header__option1">Returns</span>
                    <span className="header__option2">& Orders</span>
                </div>
            </Link>

            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__option1">Your</span>
                    <span className="header__option2">Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />

                    <span className="header__option2 header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>
          

            {/* search box */}
            {/* links on right */}
            {/* cart icon with count */}
        </nav>
    )
}

export default Header;