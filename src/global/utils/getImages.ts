import { ImageMap, DataRecord } from '@/models';

export default function getImages(data: Array<DataRecord>): ImageMap {
  const imageMap = new Map() as ImageMap;

  data.map((dataEntry) => {
    const cityName = dataEntry.city.name;
    if (imageMap.has(cityName)) return;

    // Stores city picture
    imageMap.set(cityName, dataEntry.city.picture);
  });

  return imageMap;
}
