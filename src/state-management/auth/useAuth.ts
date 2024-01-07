import { useContext } from 'react';
import AuthContext from './loginContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
