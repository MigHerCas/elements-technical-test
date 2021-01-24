import { TemperatureRecord } from '@/models';

function convertToCelsius(temperatureRecords: Array<TemperatureRecord>): Array<TemperatureRecord> {
  const convertedTemperatureRecords = [...temperatureRecords].map((temperatureRecord) => {
    const convertedRecord = {
      date: temperatureRecord.date,
      tempType: 'C',
    } as TemperatureRecord;

    switch (temperatureRecord.tempType) {
      case 'F':
        // Celsius = (Fahrenheit - 32) / 1.8
        convertedRecord.temp = (temperatureRecord.temp - 32) / 1.8;
        break;
      case 'K':
        // Celsius = Kelvin - 273.15
        convertedRecord.temp = temperatureRecord.temp - 273.15;
        break;
      case 'C':
        convertedRecord.temp = temperatureRecord.temp;
        break;
    }

    return convertedRecord;
  });

  return convertedTemperatureRecords;
}

function sortChronologically(
  temperatureRecords: Array<TemperatureRecord> = []
): Array<TemperatureRecord> {
  const sortedArray = [...temperatureRecords].sort((prevEntry, nextEntry) => {
    return new Date(prevEntry.date).getTime() - new Date(nextEntry.date).getTime();
  });

  return sortedArray;
}

export default function processTemperatureRecords(
  temperatureRecordArray: Array<TemperatureRecord>
): Array<TemperatureRecord> {
  return sortChronologically(convertToCelsius(temperatureRecordArray));
}
