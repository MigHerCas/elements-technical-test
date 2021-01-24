import { GetStaticPaths, GetStaticProps } from 'next';
import { LocationName } from '@/models';
import { fetchApi } from '@/utils';
import { AppLayout, Forecast } from '@/components';

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
  // We need: image (imageMap), dataMap
  return (
    <AppLayout>
      <Forecast locationName={location.name} />
    </AppLayout>
  );
}
