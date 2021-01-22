import { APP_CONTEXT } from '@/constants';
import { useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: Props): JSX.Element => {
  const { state } = useContext(APP_CONTEXT);

  return (
    <div className={`app-layout ${state.theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
      {children}
    </div>
  );
};

export default AppWrapper;
