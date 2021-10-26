import Modal from '../../ui/Modal';
import CartItem from './CartItem';

import classes from './Cart.module.scss';
import Button from '../../ui/Button';

const Cart = (props) => {
  const dummyCart = [
    {
      shoeId: 's1',
      shoePrice: 125,
      shoeQuantity: 3,
      shoeTitle: 'Fall Limited Edition Sneakers',
      imgPath: './images/image-product-1-thumbnail.jpg',
      imgDescription: 'Sweet Fall Kicks',
    },
    {
      shoeId: 's2',
      shoePrice: 125,
      shoeQuantity: 2,
      shoeTitle: 'Fall Limited Edition Sneakers',
      imgPath: './images/image-product-2-thumbnail.jpg',
      imgDescription: 'Sweet Fall Kicks',
    },
  ];

  const checkoutHandler = (e) => {
    e.preventDefault();
    props.onClose();
    alert('Thank you for your order!');
    // TODO:clear cart
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={classes['card-title-box']}>
        <h3 className={classes.title}>Cart</h3>
      </div>
      <div className={classes['cart-body']}>
        {dummyCart.map((item, index) => {
          return (
            <CartItem
              key={item.shoeId}
              id={item.shoeId}
              imgPath={item.imgPath}
              imgDescription={item.imgDescription}
              title={item.shoeTitle}
              quantity={item.shoeQuantity}
              price={item.shoePrice}
            />
          );
        })}
        <Button className='primary full-width' onClick={checkoutHandler}>
          Checkout
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
