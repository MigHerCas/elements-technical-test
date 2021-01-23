import { AppProps } from 'next/app';
import ContextProvider from 'src/global/context/ContextProvider';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// App styles
import '../scss/styles.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
