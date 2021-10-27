import classes from './QuantityStepper.module.scss';
import MinusSignSVG from '../svgs/MinusSignSVG';
import PlusSignSVG from '../svgs/PlusSignSVG';

const QuantityStepper = (props) => {
  return (
    <div className={classes['box']}>
      <MinusSignSVG className='hover-pointer' onClick={props.onDecrement} />
      <div className={classes['quantity']}>{props.quantity}</div>
      <PlusSignSVG className='hover-pointer' onClick={props.onIncrement} />
    </div>
  );
};

export default QuantityStepper;
