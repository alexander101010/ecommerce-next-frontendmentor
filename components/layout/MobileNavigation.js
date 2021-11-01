import Link from 'next/link';

import Modal from '../ui/Modal';

import ExitXSVG from '../svgs/ExitXSVG';
import classes from './MobileNavigation.module.scss';

export default function MobileNavigation(props) {
  return (
    <Modal className={'mobile-nav'} onClose={props.onClose}>
      <ExitXSVG
        mobileMenu={true}
        onClick={props.onClose}
        className={'hover-pointer'}
      />
      <ul className={classes['nav-items']}>
        <Link href='#'>
          <li className={classes['nav-item']}>Collections</li>
        </Link>
        <li className={classes['nav-item']}>Men</li>
        <li className={classes['nav-item']}>Women</li>
        <li className={classes['nav-item']}>About</li>
        <li className={classes['nav-item']}>Contact</li>
      </ul>
    </Modal>
  );
}
