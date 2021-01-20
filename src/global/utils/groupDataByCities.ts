import { DataRecord, CityTemperatureRecord } from '@/models';

export default function groupDataByCities(
  data: Array<DataRecord>
): Map<string, Array<CityTemperatureRecord>> {
  const dataMap = new Map<string, Array<CityTemperatureRecord>>();

  data.map((dataEntry) => {
    const cityName = dataEntry.city.name.toLowerCase();
    const existingEntries = dataMap.get(cityName) || [];
    const newEntry: CityTemperatureRecord = {
      date: dataEntry.date,
      temp: dataEntry.temp,
      tempType: dataEntry.tempType,
    };

    dataMap.set(cityName, [...existingEntries, newEntry]);
  });

  return dataMap;
}
