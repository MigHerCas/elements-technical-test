import Logo from '../../public/icons/logo.svg';
import Lantern from '../../public/icons/lantern.svg';
import { useContext } from 'react';
import { APP_CONTEXT } from '@/constants';
import { ActionType } from '@/context/actions';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { state, dispatch } = useContext(APP_CONTEXT);

  const toggleTheme = (): void => {
    dispatch({
      type: ActionType.TOGGLE_THEME,
    });
  };

  return (
    <div className={`app-layout ${state.theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
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
      {children}
    </div>
  );
};

export default Layout;
