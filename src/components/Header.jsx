import React from 'react';
import PropTypes from 'prop-types';

import cart from '../resource/header/cart.svg';
import { connect } from 'react-redux';

import actionIncrement from '../store/actionCreators/actionIncrment'

import actionDecrement from '../store/actionCreators/actionIncrment'

const Header = ({ actionIncrement, actionDecrement, counter}) => (
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
            <button className="cart buttonHeader" onClick={() => actionIncrement(2)}>
                <img src={cart} alt="cart"/>
                Cart
            </button>
            <button className="logIn buttonHeader" onClick={() => actionDecrement(1)}>
                {/* <img src={cart} alt="cart"/> */}
                {counter}
                {/* Log In */}
            </button>
        </div>
    </header>
)

// Доступ к переменной состояния то есть хранилища
const mapStateToProps = (state) => ({
    ...state
});
// Импортируем сюда функции которые создают и направляют десйтвия
const mapDispatchToProps = {
    actionIncrement,
    actionDecrement
}


Header.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);