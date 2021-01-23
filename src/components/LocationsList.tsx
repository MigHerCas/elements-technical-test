import { LocationName } from '@/models';
import Link from 'next/link';
import Image from 'next/image';
import { SLIDER_BREAKPOINTS } from '@/constants';

// import Swiper core and required components
import SwiperCore, { A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Icons
import Eye from '../../public/icons/eye.svg';
// import EyeCrossed from '../../public/icons/eye-crossed.svg';

interface Props {
  locations: Set<LocationName>;
}

// install Swiper components
SwiperCore.use([A11y, Mousewheel]);

const LocationsList = ({ locations }: Props): JSX.Element => {
  console.log(locations);

  return (
    <div className="locations-list-container">
      <h2 className="locations-list__heading">Visible locations</h2>
      <Swiper
        breakpoints={SLIDER_BREAKPOINTS}
        spaceBetween={20}
        slidesPerView={1.2}
        wrapperTag="ol"
        className="locations-list"
      >
        <SwiperSlide className="slide location-item" tag="li">
          <Link href="/barcelona">
            <div>
              <div className="location-item__back-layer">
                <div className="location-item__image">
                  <Image
                    layout="fill"
                    src="https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13"
                  />
                </div>
                <div className="location-item__name">
                  <span>Barcelona</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide location-item" tag="li">
          <Link href="/barcelona">
            <div>
              <div className="location-item__front-layer">
                <div className="location-item__hover-layer">
                  <div className="icon-wrapper">
                    <Eye />
                  </div>
                  <span>Show</span>
                </div>
                <div className="location-item__toggle">
                  <Eye />
                </div>
              </div>
              <div className="location-item__back-layer">
                <div className="location-item__image">
                  <Image
                    width={300}
                    height={200}
                    src="https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13"
                  />
                </div>
                <div className="location-item__name">
                  <span>Barcelona</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide location-item" tag="li">
          <Link href="/barcelona">
            <div>
              <div className="location-item__front-layer">
                <div className="location-item__hover-layer">
                  <div className="icon-wrapper">
                    <Eye />
                  </div>
                  <span>Show</span>
                </div>
                <div className="location-item__toggle">
                  <Eye />
                </div>
              </div>
              <div className="location-item__back-layer">
                <div className="location-item__image">
                  <Image
                    width={300}
                    height={200}
                    src="https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13"
                  />
                </div>
                <div className="location-item__name">
                  <span>Barcelona</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide location-item" tag="li">
          <Link href="/barcelona">
            <div>
              <div className="location-item__front-layer">
                <div className="location-item__hover-layer">
                  <div className="icon-wrapper">
                    <Eye />
                  </div>
                  <span>Show</span>
                </div>
                <div className="location-item__toggle">
                  <Eye />
                </div>
              </div>
              <div className="location-item__back-layer">
                <div className="location-item__image">
                  <Image
                    width={300}
                    height={200}
                    src="https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13"
                  />
                </div>
                <div className="location-item__name">
                  <span>Barcelona</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LocationsList;
