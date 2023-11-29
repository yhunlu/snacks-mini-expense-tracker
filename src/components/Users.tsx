import userService from '../services/user-service';
import useUsers from '../hooks/useUsers';

interface User {
  id: number;
  name: string;
}

const Users = () => {
  // call custom hook
  const { usersData, error, isLoading, setUsersData, setError } = useUsers();

  // create arrow function to delete user from list
  const deleteUser = (user: User) => {
    const originalUsers = [...usersData];
    setUsersData(usersData.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsersData(originalUsers);
    });
  };

  // add user to list
  const addUser = () => {
    const originalUsers = [...usersData];
    const newUser = { id: 0, name: 'YAYA' };
    setUsersData([newUser, ...usersData]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsersData([savedUser, ...usersData]);
      })
      .catch((err) => {
        setError(err.message);
        setUsersData(originalUsers);
      });
  };

  // create update user to list
  const updateUser = (user: User) => {
    const originalUsers = [...usersData];
    const updatedUser = { ...user, name: user.name + ' !' };
    setUsersData(usersData.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsersData(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {usersData.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
