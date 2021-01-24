import { LocationName } from '@/models';
import Link from 'next/link';
import React from 'react';
import ArrowBack from '../../public/icons/arrow-back.svg';
import { ForecastItem } from '@/components';

interface Props {
  locationName: LocationName;
}

const Forecast = ({ locationName }: Props): JSX.Element => {
  return (
    <section className="forecast">
      <div className="forecast-header">
        <Link href="/">
          <a>
            <ArrowBack className="forecast-header__arrow" />
          </a>
        </Link>
        <h1 className="forecast-header__heading">{locationName}</h1>
      </div>
      <ol className="forecast-content">
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem isSpacer />
      </ol>
    </section>
  );
};

export default Forecast;
