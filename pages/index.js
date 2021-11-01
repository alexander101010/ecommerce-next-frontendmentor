import Head from 'next/head';
import { Fragment, useState } from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import ShoeGallery from '../components/shoes/ShoeGallery';
import ShoeInfo from '../components/shoes/ShoeInfo';
import Cart from '../components/layout/Cart/Cart';
import LightBox from '../components/layout/LightBox';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState('1');

  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => setShowCart(true);
  const closeCartHandler = () => setShowCart(false);

  const [showLightBox, setShowLightBox] = useState(false);
  const showLightBoxHandler = (mainImage) => {
    setShowLightBox(true);
  };
  const closeLightBoxHandler = () => setShowLightBox(false);

  return (
    <Fragment>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./images/favicon-32x32.png'
        />
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <main>
        <MainNavigation
          onShowCart={showCartHandler}
          onClose={closeCartHandler}
          showCart={showCart}
        />

        <section className='shoe-container'>
          <ShoeGallery
            onShowLightBox={showLightBoxHandler}
            inLightBox={false}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
          <ShoeInfo />
        </section>
      </main>
      {showCart && <Cart onClose={closeCartHandler} />}
      {showLightBox && (
        <LightBox
          onClose={closeLightBoxHandler}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </Fragment>
  );
}
