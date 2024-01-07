import useAuth from './useAuth';


const LoginStatus = () => {
  const { user, dispatch } = useAuth();

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
