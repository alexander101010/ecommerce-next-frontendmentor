import { useState } from 'react';
import ShoeGallery from '../shoes/ShoeGallery';
import ExitXSVG from '../svgs/ExitXSVG';
import Modal from '../ui/Modal';

import classes from './LightBox.module.scss';

export default function LightBox(props) {
  const [xIsHovered, setXisHovered] = useState(false);
  const [lightBoxImage, setLightBoxImage] = useState(props.selectedImage);

  return (
    <Modal className='light-box' onClose={props.onClose}>
      <div
        onMouseEnter={() => setXisHovered(true)}
        onMouseLeave={() => setXisHovered(false)}
        className={classes['exit-box']}
        onClick={props.onClose}
      >
        <ExitXSVG isHovered={xIsHovered} />
      </div>
      <ShoeGallery
        inLightBox={true}
        setSelectedImage={setLightBoxImage}
        selectedImage={lightBoxImage}
      />
    </Modal>
  );
}
