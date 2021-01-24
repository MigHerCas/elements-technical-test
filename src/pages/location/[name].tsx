import { GetStaticPaths, GetStaticProps } from 'next';
import { DataMap, DataRecord, ImageMap, LocationName } from '@/models';
import { capitalizeTerm, fetchApi, getImages, getTemperatureRecords } from '@/utils';
import { AppLayout, Forecast } from '@/components';
import { APP_CONTEXT } from '@/constants';
import { useCallback, useContext, useEffect } from 'react';
import { ActionType } from '@/actions';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetchApi();

  return {
    props: {
      location: params,
      data: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const data = await fetchApi();

  const paths = data.map((dataRecord) => {
    return { params: { name: dataRecord.city.name.toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  location: {
    name: LocationName;
  };
  data: Array<DataRecord>;
}

export default function LocationDetail({ location, data }: Props): JSX.Element {
  const { state, dispatch } = useContext(APP_CONTEXT);
  const locationImage = state.imageMap.get(capitalizeTerm(location.name.toLowerCase()));

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

  return (
    <AppLayout locationImage={locationImage}>
      <Forecast locationName={location.name} />
    </AppLayout>
  );
}
