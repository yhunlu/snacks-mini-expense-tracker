import React, { Dispatch } from 'react';
import { Action } from '../reducers/loginReducer';

interface AuthContextType {
  user: string;
  dispatch: Dispatch<Action>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
