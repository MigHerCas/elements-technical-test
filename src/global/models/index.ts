type TemperatureUnit = 'C' | 'F' | 'K';

export interface DataRecord {
  city: {
    name: string;
    picture: string;
  };
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}

export interface CityTemperatureRecord {
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}
