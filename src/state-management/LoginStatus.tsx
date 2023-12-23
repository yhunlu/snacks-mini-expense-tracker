import { useReducer } from 'react';
import loginReducer from './reducers/loginReducer';

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginReducer, '');

  if (user) {
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a href="#" onClick={() => dispatch({ type: 'LOGOUT' })}>
            Logout
          </a>
        </div>
      </>
    );
  }
  return (
    <div>
      <a href="#" onClick={() => dispatch({ type: 'LOGIN', username: 'Yahya' })}>
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
