import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import Modal from '../../ui/Modal';
import CartItem from './CartItem';
import Button from '../../ui/Button';

import classes from './Cart.module.scss';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const checkoutHandler = (e) => {
    e.preventDefault();
    props.onClose();
    alert('Thank you for your order!');
    cartCtx.clearCart();
  };

  const deleteItemsHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const emptyCartMarkup = (
    <p className={classes['empty-cart-content']}>Your cart is empty.</p>
  );

  console.log(cartCtx.items);

  const cartItemsMarkup = (
    <div className={classes['cart-body']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            imgPath={item.imgPath}
            imgDescription={item.imgDescription}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            onDeleteItem={deleteItemsHandler.bind(null, item.id)}
          />
        );
      })}
      <Button className='primary full-width' onClick={checkoutHandler}>
        Checkout
      </Button>
    </div>
  );

  const isCartEmpty = cartCtx.items.length === 0;
  // console.log(isCartEmpty);

  return (
    <Modal onClose={props.onClose} className='modal-cart'>
      <div className={classes['card-title-box']}>
        <h3 className={classes.title}>Cart</h3>
      </div>
      {isCartEmpty ? emptyCartMarkup : cartItemsMarkup}
    </Modal>
  );
};

export default Cart;
