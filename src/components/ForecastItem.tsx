import aos from 'aos';
import { useEffect } from 'react';

interface Props {
  isSpacer?: boolean;
  temperature?: number;
  hour?: string;
  date?: string;
}

const ForecastItem = ({ isSpacer = false, date, hour, temperature }: Props): JSX.Element => {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);

  if (isSpacer) return <li className="forecast-content__item forecast-content__item--spacer" />;
  return (
    <li className="forecast-content__item" data-aos="fade-up">
      <span className="hour">{hour}</span>
      <span className="temperature">{temperature}°</span>
      <span className="date">{date}</span>
    </li>
  );
};

export default ForecastItem;
