import Button from '../ui/Button';
import CartSVG from '../svgs/CartSVG';

import classes from './ShoeInfo.module.scss';
import QuantityStepper from '../ui/QuantityStepper';

const ShoeInfo = () => {
  const btnClickHandler = (e) => {
    console.log(e.target.innerText);
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
        <QuantityStepper />
        <Button className={'primary'} onClick={btnClickHandler}>
          <CartSVG className={'btn-cart'} color={'white'} />
          <span className={'btn-left-margin'}>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ShoeInfo;
