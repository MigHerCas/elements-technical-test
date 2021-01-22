import { useCallback, useContext, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { APP_CONTEXT } from '@/constants';
import { fetchApi, getImages, getTemperatureRecords } from '@/utils';
import { ActionType } from '@/context/actions';
import type { DataMap, ImageMap } from '@/models';
import { AppLayout } from '@/components';

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
    <AppLayout>
      <main>
        <Link href="/city">
          <a>DataRecord</a>
        </Link>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </AppLayout>
  );
}
