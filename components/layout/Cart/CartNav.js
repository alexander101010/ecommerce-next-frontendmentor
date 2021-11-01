import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import CartSVG from '../../svgs/CartSVG';

import classes from './CartNav.module.scss';

const CartNav = ({ onClose, onShowCart, showCart }) => {
  const [showBadge, setShowBadge] = useState(false);
  const cartCtx = useContext(CartContext);
  // const reducer = (prevVal, currentVal);
  const totalNumberItems = cartCtx.items
    .map((item) => item.quantity)
    .reduce((sum, val) => sum + val, 0);

  useEffect(() => {
    if (totalNumberItems > 0) {
      setShowBadge(true);
    } else {
      setShowBadge(false);
    }
  }, [totalNumberItems]);

  console.log(totalNumberItems);
  return (
    <div className={classes['cart-nav-container']}>
      <div className={classes['cart-icon-container']}>
        <CartSVG
          color={'hsl(219, 9%, 45%)'}
          onClick={onShowCart}
          className={'hover-pointer'}
        />
        {showBadge && (
          <div className={classes['cart-nav-badge']}>{totalNumberItems}</div>
        )}
      </div>
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
