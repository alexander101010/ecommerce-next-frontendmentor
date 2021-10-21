import { useState } from 'react';

import CartSVG from '../../svgs/CartSVG';

import classes from './CartNav.module.scss';

const CartNav = () => {
  const [showCart, setShowCart] = useState(false);
  const avatarClickHandler = (e) => {
    setShowCart(true);
  };
  return (
    <div className={classes['cart-nav-container']}>
      <CartSVG color={'hsl(219, 9%, 45%)'} />
      <img
        onClick={avatarClickHandler}
        className={`${classes.avatar} ${showCart ? classes.active : ''}`}
        src='/images/image-avatar.png'
        alt='Photo of sauve dude'
      />
    </div>
  );
};

export default CartNav;
