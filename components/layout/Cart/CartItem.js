import classes from './CartItem.module.scss';
import GarbageSVG from '../../svgs/GarbageSVG';

export default function CartItem(props) {
  const { imgPath, imgDescription, title, price, quantity } = props;
  return (
    <div className={classes['item__container']}>
      <img
        src={imgPath}
        alt={imgDescription}
        className={classes['item__image']}
      />
      <div className={classes['item__infos']}>
        <p className={classes['item__title']}>{title}</p>
        <p className={classes['item__prices']}>
          ${price.toFixed(2)} x {quantity}
          <span> ${(price * quantity).toFixed(2)}</span>
        </p>
      </div>
      {/* <GarbageSVG /> Not working..? just coming out as a flat line, use emoji instead*/}
      <p
        className='hover-pointer'
        // onClick={deleteItemHandler}
      >
        🗑
      </p>
    </div>
  );
}
