import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop = (props) => {
  const classNames = `${classes.backdrop} 
  ${classes[`backdrop-${props.className}`]}`;
  return <div className={classNames} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const classNames = `${classes.modal} ${classes[props.className]}`;

  return (
    <div className={classNames}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = ({ className, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={onClose} className={className} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <ModalOverlay className={className} onClose={onClose}>
            {children}
          </ModalOverlay>,
          document.getElementById('overlay-root')
        )}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default Modal;
