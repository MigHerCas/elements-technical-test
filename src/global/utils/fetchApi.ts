import { DataRecord } from '@/models';
const { API_URL } = process.env;

export default async function fetchApi(): Promise<Array<DataRecord>> {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json;
}
