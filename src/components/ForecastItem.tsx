interface Props {
  isSpacer?: boolean;
  temperature?: number;
  hour?: string;
  date?: string;
}

const ForecastItem = ({ isSpacer = false, date, hour, temperature }: Props): JSX.Element => {
  if (isSpacer) return <li className="forecast-content__item forecast-content__item--spacer" />;
  return (
    <li
      className="forecast-content__item"
      data-aos="fade-up"
      data-aos-duration={800}
      data-aos-delay={1100}
    >
      <span className="hour">{hour}</span>
      <span className="temperature">{temperature}°</span>
      <span className="date">{date}</span>
    </li>
  );
};

export default ForecastItem;
