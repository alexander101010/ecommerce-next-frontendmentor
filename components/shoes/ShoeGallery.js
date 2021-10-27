import { useState } from 'react';

import LeftSVG from '../svgs/LeftSVG';
import RightSVG from '../svgs/RightSVG';

import classes from './ShoeGallery.module.scss';

const ShoeGallery = ({
  inLightBox,
  onShowLightBox,
  setSelectedImage,
  selectedImage,
}) => {
  const [rightArrowIsHovered, setRightArrowIsHovered] = useState(false);
  const [leftArrowIsHovered, setLeftArrowIsHovered] = useState(false);

  const thumbnailClickHandler = (e) => {
    setSelectedImage(e.target.id);
  };

  const leftBtnClickHandler = () => {
    const currentImgNum = +selectedImage; //
    console.log(currentImgNum);
    if (currentImgNum === 1) {
      setSelectedImage('4');
    } else {
      setSelectedImage(`${currentImgNum - 1}`);
    }
  };

  const rightBtnClickHandler = () => {
    const currentImgNum = +selectedImage;
    if (currentImgNum === 4) {
      setSelectedImage('1');
    } else {
      setSelectedImage(`${currentImgNum + 1}`);
    }
  };

  return (
    <div className={classes.gallery}>
      <div className={classes['main-image__box']}>
        <img
          src={`/images/image-product-${selectedImage}.jpg`}
          alt='Fall Sneakers artfully photographed'
          className={classes['main-image']}
          onClick={onShowLightBox}
        />

        <div
          className={inLightBox ? classes['lb-arrow-left'] : classes.back}
          onMouseEnter={() => setLeftArrowIsHovered(true)}
          onMouseLeave={() => setLeftArrowIsHovered(false)}
          onClick={leftBtnClickHandler}
        >
          <LeftSVG
            isHovered={leftArrowIsHovered}
            inLB={inLightBox}
            className={inLightBox ? classes['lightbox-arrow'] : ''}
          />
        </div>
        <div
          className={inLightBox ? classes['lb-arrow-right'] : classes.forth}
          onClick={rightBtnClickHandler}
          onMouseEnter={() => setRightArrowIsHovered(true)}
          onMouseLeave={() => setRightArrowIsHovered(false)}
        >
          <RightSVG
            isHovered={rightArrowIsHovered}
            inLB={inLightBox}
            className={inLightBox ? classes['lightbox-arrow'] : ''}
          />
        </div>
      </div>
      <div
        className={`${classes.thumbnails} ${
          inLightBox ? classes.lightbox : ''
        }`}
      >
        <div
          className={`${classes['thumbnail-box']} ${
            selectedImage === '1' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-1-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              selectedImage === '1' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='1'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            selectedImage === '2' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-2-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              selectedImage === '2' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='2'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            selectedImage === '3' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-3-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              selectedImage === '3' ? classes.active : ''
            }`}
            onClick={thumbnailClickHandler}
            id='3'
          />
        </div>
        <div
          className={`${classes['thumbnail-box']} ${
            selectedImage === '4' ? classes.active : ''
          }`}
        >
          <img
            src='./images/image-product-4-thumbnail.jpg'
            alt=''
            className={`${classes.thumbnail} ${
              selectedImage === '4' ? classes.active : ''
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
