import { GetStaticPaths, GetStaticProps } from 'next';
import { LocationName } from '@/models';
import { capitalizeTerm, fetchApi } from '@/utils';
import { AppLayout, Forecast } from '@/components';
import { APP_CONTEXT } from '@/constants';
import { useContext } from 'react';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      location: params,
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
}

export default function LocationDetail({ location }: Props): JSX.Element {
  const { state } = useContext(APP_CONTEXT);
  const locationImage = state.imageMap.get(capitalizeTerm(location.name.toLowerCase()));
  return (
    <AppLayout locationImage={locationImage}>
      <Forecast locationName={location.name} />
    </AppLayout>
  );
}
