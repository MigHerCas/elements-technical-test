import { ActionType } from '@/actions';
import { AppLayout, LocationsSlider } from '@/components';
import { APP_CONTEXT } from '@/constants';
import type { DataMap, ImageMap } from '@/models';
import { fetchApi, getImages, getTemperatureRecords } from '@/utils';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useCallback, useContext, useEffect } from 'react';

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
  // TODO: abstract this logic inside App
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
      <LocationsSlider />
      <LocationsSlider hiddenList />
    </AppLayout>
  );
}
