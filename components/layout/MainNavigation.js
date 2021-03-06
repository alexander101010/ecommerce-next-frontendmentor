import { useState } from 'react';

import CartNav from './Cart/CartNav';
import HamburgerSVG from '../svgs/HamburgerSVG';

import classes from './MainNavigation.module.scss';
import MobileNavigation from './MobileNavigation';

const MainNavigation = ({ onShowCart, onClose, showCart }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navLinkClickHandler = (e) => {
    setActiveLink(e.target.textContent);
  };
  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const openMobileMenuHandler = (e) => {
    console.log('mobile menu should open'); //TODO:
    setShowMobileNav(true);
  };
  const closeMobileNavHandler = () => setShowMobileNav(false);

  return (
    <nav className={classes.nav}>
      <div className={classes['nav-left']}>
        <HamburgerSVG
          className='mobile-hamburger'
          onClick={openMobileMenuHandler}
        />
        {showMobileNav && <MobileNavigation onClose={closeMobileNavHandler} />}
        <h1 className={classes.title}>sneakers</h1>
        <ul className={classes['nav-list']}>
          {navLinks.map((link) => (
            <li
              onClick={navLinkClickHandler}
              key={link}
              className={`${classes['nav-list__item']} ${
                link === activeLink ? classes.active : ''
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <CartNav onClose={onClose} onShowCart={onShowCart} showCart={showCart} />
    </nav>
  );
};

export default MainNavigation;
