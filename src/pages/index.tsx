import { useCallback, useContext, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { APP_CONTEXT } from '@/constants';
import { fetchApi, groupDataByCities } from '@/utils';
import { ActionType } from '@/context/actions';
import styles from '../styles/Home.module.css';
import { DataMap } from '@/models';

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
  const { state, dispatch } = useContext(APP_CONTEXT);

  const initializeDataMap = useCallback(
    (dataMap: DataMap) => {
      dispatch({
        type: ActionType.INITIALIZE_DATA_MAP,
        payload: dataMap,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const dataMap = groupDataByCities(data);
    initializeDataMap(dataMap);
  }, [initializeDataMap, data]);

  console.log(state);

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
