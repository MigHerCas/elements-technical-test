interface Props {
  isSpacer?: boolean;
}

const ForecastItem = ({ isSpacer = false }: Props): JSX.Element => {
  if (isSpacer) return <li className="forecast-content__item forecast-content__item--spacer" />;
  return (
    <li className="forecast-content__item">
      <span className="hour">2pm</span>
      <span className="temperature">57g</span>
      <span className="date">23/12</span>
    </li>
  );
};

export default ForecastItem;
