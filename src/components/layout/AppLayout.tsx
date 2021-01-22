import Head from 'next/head';
import { Header, Footer, Sidebar, AppWrapper } from '@/components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <AppWrapper>
      <Head>
        <title>Elements technical test</title>
      </Head>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </AppWrapper>
  );
};

export default Layout;
