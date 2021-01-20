import { DataRecord } from '@/models';
const { API_URL } = process.env;

const fetchApi = async (): Promise<Array<DataRecord>> => {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json;
};

export default fetchApi;
