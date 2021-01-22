import { AppProps } from 'next/app';
import ContextProvider from 'src/global/context/ContextProvider';
import '../scss/styles.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
