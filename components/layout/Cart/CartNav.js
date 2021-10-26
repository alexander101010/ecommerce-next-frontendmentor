import CartSVG from '../../svgs/CartSVG';

import classes from './CartNav.module.scss';

const CartNav = ({ onClose, onShowCart, showCart }) => {
  return (
    <div className={classes['cart-nav-container']}>
      <CartSVG
        color={'hsl(219, 9%, 45%)'}
        onClick={onShowCart}
        className={'hover-pointer'}
      />
      <img
        onClick={onShowCart}
        className={`${classes.avatar} ${showCart ? classes.active : ''}`}
        src='/images/image-avatar.png'
        alt='Photo of sauve dude'
      />
    </div>
  );
};

export default CartNav;
