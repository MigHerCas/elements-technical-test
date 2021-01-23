import { LocationName } from '@/models';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  locations: Set<LocationName>;
}

const LocationsList = ({ locations }: Props): JSX.Element => {
  console.log(locations);

  return (
    <div className="locations-list-container">
      <h2 className="locations-list__heading">Visible locations</h2>
      <ol className="locations-list">
        <li className="location-item">
          <Link href="/barcelona">
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
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default LocationsList;