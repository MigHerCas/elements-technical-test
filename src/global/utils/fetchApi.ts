import { DataRecord } from '@/models';

export default async function fetchApi(): Promise<Array<DataRecord>> {
  const response = await fetch(`${process.env.API_URL}`);
  const json = await response.json();
  return json;
}
