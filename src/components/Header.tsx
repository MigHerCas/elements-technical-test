import { useContext } from 'react';
import { APP_CONTEXT } from '@/constants';
import { ActionType } from '@/context/actions';

// Icons
import Logo from '../public/icons/logo.svg';
import Lantern from '../public/icons/lantern.svg';

const Header = (): JSX.Element => {
  const { dispatch } = useContext(APP_CONTEXT);

  const toggleTheme = (): void => {
    dispatch({
      type: ActionType.TOGGLE_THEME,
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo className="logo__icon" />
        <span className="logo__span">Weather</span>
      </div>
      <div className="theme-toggle">
        <button className="theme-toggle__button" onClick={() => toggleTheme()}>
          <Lantern className="theme-toggle__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
