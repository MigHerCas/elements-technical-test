import React, { useCallback, useContext, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { APP_CONTEXT } from '@/constants';
import { fetchApi, getImages, getTemperatureRecords } from '@/utils';
import { ActionType } from '@/context/actions';
import type { DataMap, ImageMap } from '@/models';
import Layout from '@/components/Layout';

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

  const initializeMaps = useCallback(
    (dataMap: DataMap, imageMap: ImageMap) => {
      dispatch({
        type: ActionType.INITIALIZE_MAPS,
        payload: {
          dataMap,
          imageMap,
        },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (!state.initialized) {
      const dataMap = getTemperatureRecords(data);
      const imageMap = getImages(data);
      initializeMaps(dataMap, imageMap);
    }
  }, [initializeMaps, data, state.initialized]);

  console.log(state);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/city">
          <a>DataRecord</a>
        </Link>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </Layout>
  );
}
