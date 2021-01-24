import { LocationName } from '@/models';
import Link from 'next/link';
import ArrowBack from '../../public/icons/arrow-back.svg';

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
        <li className="forecast-content__item">
          <span className="hour">2pm</span>
          <span className="temperature">57g</span>
          <span className="date">23/12</span>
        </li>
        <li className="forecast-content__item">
          <span className="hour">2pm</span>
          <span className="temperature">57g</span>
          <span className="date">23/12</span>
        </li>
        <li className="forecast-content__item">
          <span className="hour">2pm</span>
          <span className="temperature">57g</span>
          <span className="date">23/12</span>
        </li>
        <li className="forecast-content__item">
          <span className="hour">2pm</span>
          <span className="temperature">57g</span>
          <span className="date">23/12</span>
        </li>
        <li className="forecast-content__item">
          <span className="hour">2pm</span>
          <span className="temperature">57g</span>
          <span className="date">23/12</span>
        </li>
        <li className="forecast-content__item forecast-content__item--spacer"></li>
      </ol>
    </section>
  );
};

export default Forecast;
