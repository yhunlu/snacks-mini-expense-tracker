import { useEffect, useState } from 'react';
import userService from '../services/user-service';
import { CanceledError } from 'axios';

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsersData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

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
