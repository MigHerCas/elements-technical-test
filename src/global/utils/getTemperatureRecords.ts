import type { DataRecord, TemperatureRecord, DataMap } from '@/models';

export default function getTemperatureRecords(data: Array<DataRecord>): DataMap {
  const dataMap = new Map() as DataMap;

  data.map((dataEntry) => {
    const cityName = dataEntry.city.name.toLowerCase();
    const existingDataEntries = dataMap.get(cityName) || [];
    const newEntry: TemperatureRecord = {
      date: dataEntry.date,
      temp: dataEntry.temp,
      tempType: dataEntry.tempType,
    };

    dataMap.set(cityName, [...existingDataEntries, newEntry]);
  });

  return dataMap;
}
