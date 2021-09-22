import Cookies from 'js-cookie';
import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    Cookies.remove('UserInfo');
    Cookies.remove('cartItems');
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
