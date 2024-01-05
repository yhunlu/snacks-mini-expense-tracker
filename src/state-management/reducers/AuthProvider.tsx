import { ReactNode, useReducer } from 'react';
import AuthContext from '../contexts/loginContext';
import loginReducer from './loginReducer';

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
