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
