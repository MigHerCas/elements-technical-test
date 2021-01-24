import Link from 'next/link';
import { useContext } from 'react';
import { APP_CONTEXT } from '@/constants';
import { ActionType } from '@/actions';

// Icons
import Logo from '../../public/icons/logo.svg';
import Lantern from '../../public/icons/lantern.svg';
import RefreshIcon from '../../public/icons/refresh.svg';
import { fetchApi, getImages, getTemperatureRecords } from '@/utils';

const Header = (): JSX.Element => {
  const { dispatch } = useContext(APP_CONTEXT);

  const toggleTheme = (): void => {
    dispatch({
      type: ActionType.TOGGLE_THEME,
    });
  };

  const refreshApp = async (): Promise<void> => {
    console.log('♻️ ♻️ Restarting app! ♻️ ♻️');
    const data = await fetchApi();

    dispatch({
      type: ActionType.INITIALIZE_MAPS,
      payload: {
        dataMap: getTemperatureRecords(data),
        imageMap: getImages(data),
      },
    });
  };

  return (
    <header className="header">
      <Link href="/">
        <a className="logo-link">
          <div className="logo">
            <Logo className="logo__icon" />
            <h1 className="logo__heading">Weather</h1>
          </div>
        </a>
      </Link>
      <button className="refresh-button" onClick={async () => await refreshApp()}>
        <RefreshIcon className="refresh-icon" />
      </button>
      <div className="theme-toggle">
        <button className="theme-toggle__button" onClick={() => toggleTheme()}>
          <Lantern className="theme-toggle__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
