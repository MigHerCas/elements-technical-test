import React, { useContext, useEffect, useState } from 'react';
import { ActionType } from '@/actions';
import { LocationName } from '@/models';
import { APP_CONTEXT, SLIDER_BREAKPOINTS } from '@/constants';
import { LocationItem } from '@/components';

// import Swiper core and required components
import SwiperCore, { A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <section className="locations-list-container">
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
              <LocationItem
                locationName={location}
                locationImage={locationImage}
                hiddenList={hiddenList}
                handleToggleClick={handleToggleClick}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default LocationsList;
