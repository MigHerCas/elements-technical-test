import { APP_CONTEXT, INITIAL_STATE } from '@/constants';
import { useMemo, useReducer } from 'react';
import reducer from './reducer';

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <APP_CONTEXT.Provider value={contextValue}>{children}</APP_CONTEXT.Provider>;
};

export default ContextProvider;
