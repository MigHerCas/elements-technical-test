import { useContext, useEffect, useState } from 'react';
import { LocationName } from '@/models';
import Link from 'next/link';
import Image from 'next/image';
import { APP_CONTEXT, SLIDER_BREAKPOINTS } from '@/constants';

// import Swiper core and required components
import SwiperCore, { A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Icons
import Eye from '../../public/icons/eye.svg';
import EyeCrossed from '../../public/icons/eye-crossed.svg';
import { ActionType } from '@/actions';

interface Props {
  hiddenList?: boolean;
}

// install Swiper components
SwiperCore.use([A11y, Mousewheel]);

const LocationsList = ({ hiddenList = false }: Props): JSX.Element => {
  const { dispatch, state } = useContext(APP_CONTEXT);
  const [sortedLocations, setSortedLocations] = useState<Array<LocationName>>();

  useEffect(() => {
    setSortedLocations(
      Array.from((hiddenList ? state.hiddenLocationsSet : state.visibleLocationsSet).keys()).sort()
    );
  }, [hiddenList, state.hiddenLocationsSet, state.visibleLocationsSet]);

  const handleToggleClick = (locationName: LocationName): void => {
    dispatch({
      type: ActionType.TOGGLE_LOCATION,
      payload: locationName,
    });
  };

  return (
    <div className="locations-list-container">
      <h2 className="locations-list__heading">{hiddenList ? 'Hidden' : 'Visible'} locations</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={SLIDER_BREAKPOINTS}
        wrapperTag="ol"
        className="locations-list"
      >
        {sortedLocations?.map((location) => {
          console.log(location);
          const locationImage = state.imageMap.get(location) || '';

          return (
            <SwiperSlide
              className={`slide location-item ${hiddenList ? 'location-item--hidden' : ''}`}
              tag="li"
              key={location}
            >
              {hiddenList && (
                <button
                  className="location-item__hover-layer"
                  onClick={() => handleToggleClick(location)}
                >
                  <div className="icon-wrapper">
                    <Eye />
                  </div>
                  <span>Show</span>
                </button>
              )}
              <button className="location-item__toggle" onClick={() => handleToggleClick(location)}>
                {hiddenList ? <Eye /> : <EyeCrossed />}
              </button>
              <Link href={`/${location?.toLowerCase()}`}>
                <div className="location-item__back-layer">
                  <div className="location-item__image">
                    <Image layout="fill" src={locationImage} />
                  </div>
                  <div className="location-item__name">
                    <span>{location}</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LocationsList;
