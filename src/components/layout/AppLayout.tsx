import Head from 'next/head';
import { Header, Footer, Sidebar, AppWrapper, BackgroundShape } from '@/components';
import { LocationName } from '@/models';

interface Props {
  children: React.ReactNode;
  locationImage?: LocationName;
}

const Layout = ({ children, locationImage = '' }: Props): JSX.Element => {
  return (
    <AppWrapper>
      <Head>
        <title>Elements technical test</title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
      <BackgroundShape image={locationImage} />
    </AppWrapper>
  );
};

export default Layout;
