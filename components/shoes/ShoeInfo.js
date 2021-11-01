import { useContext, useState } from 'react';

import QuantityStepper from '../ui/QuantityStepper';
import Button from '../ui/Button';
import CartSVG from '../svgs/CartSVG';

import CartContext from '../../store/cart-context';
import classes from './ShoeInfo.module.scss';

const ShoeInfo = () => {
  const cartCtx = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const decrementClickHandler = () => {
    if (quantity > 0) {
      setQuantity((prevState) => {
        return prevState - 1;
      });
      // setQuantity(quantity - 1);
    }
  };
  const incrementClickHandler = () => {
    setQuantity((prevState) => prevState + 1);
    // setQuantity(quantity + 1);
  };
  const AddToCartClickHandler = () => {
    /// should by dynamic, but since there is only one item I'll just leave it hardcoded with only the quantity dynamic
    const item = {
      id: 's1',
      price: 125,
      quantity: quantity,
      title: 'Fall Limited Edition Sneakers',
      imgPath: './images/image-product-1-thumbnail.jpg',
      imgDescription: 'Sweet Fall Kicks',
    };
    cartCtx.addItem(item);
    setQuantity(0);
  };

  return (
    <div className={classes['info-container']}>
      <div className={classes.company}>sneaker company</div>
      <h1 className={classes.headline}>Fall Limited Edition Sneakers</h1>
      <p className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={classes['price-box']}>
        <p className={classes['sale-price']}>
          $125.00 <span>50%</span>
        </p>
        <p className={classes['list-price']}>$250.00</p>
      </div>
      <div className={classes['actions']}>
        <QuantityStepper
          quantity={quantity}
          onIncrement={incrementClickHandler}
          onDecrement={decrementClickHandler}
        />
        <Button className={'primary'} onClick={AddToCartClickHandler}>
          <CartSVG className={'btn-cart'} color={'white'} />
          <span className={'btn-left-margin'}>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ShoeInfo;
