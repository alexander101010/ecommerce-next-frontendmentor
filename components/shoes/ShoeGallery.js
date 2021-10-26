import { useState } from 'react';

import LeftSVG from '../svgs/LeftSVG';
import RightSVG from '../svgs/RightSVG';

import classes from './ShoeGallery.module.scss';

const ShoeGallery = () => {
  const [mainImageNum, setMainImageNum] = useState('1');
  const thumbnailClickHandler = (e) => {
    setMainImageNum(e.target.id);
  };

  const leftBtnClickHandler = () => {
    const currentImgNum = +mainImageNum; //
    console.log(currentImgNum);
    if (currentImgNum === 1) {
      setMainImageNum('4');
    } else {
      setMainImageNum(`${currentImgNum - 1}`);
    }
  };

  const rightBtnClickHandler = () => {
    const currentImgNum = +mainImageNum;
    if (currentImgNum === 4) {
      setMainImageNum('1');
    } else {
      setMainImageNum(`${currentImgNum + 1}`);
    }
  };

  return (
    <div className={classes.gallery}>
      <img
        src={`/images/image-product-${mainImageNum}.jpg`}
        alt='Fall Sneakers artfully photographed'
        className={classes['main-image']}
      />

      <div className={classes.back} onClick={leftBtnClickHandler}>
        <LeftSVG />
      </div>
      <div className={classes.forth} onClick={rightBtnClickHandler}>
        <RightSVG />
      </div>
      <div className={classes.thumbnails}>
        <div
          className={`${classes['thumbnail-box']} ${
            mainImageNum === '1' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-1-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              mainImageNum === '1' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='1'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            mainImageNum === '2' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-2-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              mainImageNum === '2' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='2'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            mainImageNum === '3' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-3-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              mainImageNum === '3' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='3'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            mainImageNum === '4' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-4-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              mainImageNum === '4' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='4'
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeGallery;
