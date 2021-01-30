import React from 'react';
import PropTypes from 'prop-types';
// Resource
import arrowTop from '../resource/footer/arrowTop.svg';
import visa from '../resource/footer/visa.svg';
import maestro from '../resource/footer/maestro.svg';
import mastercard from '../resource/footer/mastercard.svg';
import paypal from '../resource/footer/paypal.svg';
import facebook from '../resource/footer/facebook.svg';
import twitter from '../resource/footer/twitter.svg';
import instagram from '../resource/footer/instagram.svg';

const Footer = () => (
    <footer className="footer">
        <div className="topBlockFooter">
            <div className="topNavFooter">
                <ul>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className="topSocialFooter">
                <ul>
                    <li>Follow Us</li>
                    <li className="socialImg"><img src={facebook} alt="facebook" /></li>
                    <li className="socialImg"><img src={twitter} alt="twitter" /></li>
                    <li className="socialImg"><img src={instagram} alt="instagram" /></li>
                </ul>
            </div>
            <div className="copyright">© 2021 Universal UI</div>
        </div>
        <div className="line"></div>
        <div className="bottomBlockFooter">
            <div className="bottomNavFooter">
                <ul>
                    <li><img src={maestro} alt="Maestro" /></li>
                    <li><img src={visa} alt="Visa" /></li>
                    <li><img src={mastercard} alt="Mastercard" /></li>
                    <li><img src={paypal} alt="Paypal" /></li>
                </ul>
            </div>
            <div className="scrollButton">
                <p>Top</p>
                <button><img src={arrowTop} alt="arrow-top"/></button>
            </div>
        </div>
    </footer>
);


Footer.propTypes = {

};


export default Footer;
