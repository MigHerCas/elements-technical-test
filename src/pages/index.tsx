import fetchApi from '@/utils/fetchApi';
import groupDataByCities from '@/utils/groupDataByCities';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchApi();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const dataMap = groupDataByCities(data);
  console.log(dataMap);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/city">
          <a>DataRecord</a>
        </Link>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
