import { LocationName } from '@/models';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import ArrowBack from '../../public/icons/arrow-back.svg';
import { ForecastItem } from '@/components';
import { capitalizeTerm, processTemperatureRecords } from '@/utils';
import { APP_CONTEXT } from '@/constants';
import aos from 'aos';

interface Props {
  locationName: LocationName;
}

const Forecast = ({ locationName }: Props): JSX.Element => {
  const { state } = useContext(APP_CONTEXT);
  const temperatureRecordsArray = state.dataMap.get(capitalizeTerm(locationName)) || [];

  const processedTemperatureRecords = processTemperatureRecords(temperatureRecordsArray);

  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);

  return (
    <section className="forecast">
      <div className="forecast-header">
        <Link href="/">
          <a data-aos="fade-left">
            <ArrowBack className="forecast-header__arrow" />
          </a>
        </Link>
        <h1 className="forecast-header__heading" data-aos="fade-up">
          {capitalizeTerm(locationName)}
        </h1>
      </div>
      <ol className="forecast-content">
        {processedTemperatureRecords.map(({ date, temp }, index) => {
          const dateObject = new Date(date);
          return (
            <ForecastItem
              temperature={Number.parseFloat(temp.toFixed(2))}
              key={index}
              hour={dateObject.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
              date={`${dateObject.getDate()}/${dateObject.getMonth() + 1}`}
            />
          );
        })}
        <ForecastItem isSpacer />
      </ol>
    </section>
  );
};

export default Forecast;
