import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LocationName } from '@/models';

// Icons
import Eye from '../../public/icons/eye.svg';
import EyeCrossed from '../../public/icons/eye-crossed.svg';

interface Props {
  locationName: LocationName;
  locationImage: string;
  handleToggleClick(location: LocationName): void;
  hiddenList: boolean;
}

const LocationItem = ({
  locationName,
  locationImage,
  handleToggleClick,
  hiddenList,
}: Props): JSX.Element => {
  return (
    <Fragment>
      {hiddenList && (
        <button
          className="location-item__hover-layer"
          onClick={() => handleToggleClick(locationName)}
        >
          <div className="icon-wrapper">
            <Eye />
          </div>
          <span>Show</span>
        </button>
      )}
      <button className="location-item__toggle" onClick={() => handleToggleClick(locationName)}>
        {hiddenList ? <Eye /> : <EyeCrossed />}
      </button>
      <Link href="/location/[name]" as={`/location/${locationName?.toLowerCase()}`}>
        <div className="location-item__back-layer">
          <div className="location-item__image">
            <Image layout="fill" src={locationImage} />
          </div>
          <div className="location-item__name">
            <span>{locationName}</span>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default LocationItem;
