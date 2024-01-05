import { useContext } from 'react';
import AuthContext from '../contexts/loginContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
