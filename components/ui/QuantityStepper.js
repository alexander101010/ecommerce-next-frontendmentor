import classes from './QuantityStepper.module.scss';
import MinusSignSVG from '../svgs/MinusSignSVG';
import PlusSignSVG from '../svgs/PlusSignSVG';

const QuantityStepper = (props) => {
  return (
    <div className={classes['box']}>
      <MinusSignSVG className='hover-pointer' />
      <div className={classes['quantity']}>0</div>
      <PlusSignSVG className='hover-pointer' />
    </div>
  );
};

export default QuantityStepper;
