import { ReactNode, useReducer } from 'react';
import AuthContext from './loginContext';

interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type Action = LoginAction | LogoutAction;

const loginReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'LOGIN':
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
};

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
