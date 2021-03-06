import '../styles/globals.scss';
import '../styles/Button.scss';
import CartProvider from '../store/CartProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
