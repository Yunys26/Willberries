import React from 'react';
import PropTypes from 'prop-types';

import cart from '../resource/header/cart.svg';

const Header = () => (
    <header className="header">
        <div className="logoHeader">
            <h1>Willberries</h1>
        </div>
        <div className="navigationHeader">
            <ul>
                <li>Womens</li>
                <li>Mens</li>
                <li>Goods</li>
                <li>Accessories</li>
                <li>Brands</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="rightNavigationHeader">
            <button className="cart buttonHeader">
                <img src={cart} alt="cart"/>
                Cart
            </button>
            <button className="logIn buttonHeader">
                {/* <img src={cart} alt="cart"/> */}
                Log in
            </button>
        </div>
    </header>
)


Header.propTypes = {

};

export default Header;