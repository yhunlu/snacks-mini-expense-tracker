import { useEffect, useState } from 'react';
import apiClient, { AxiosError } from '../services/api-client';

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const controller = new AbortController();

      setIsLoading(true);

      try {
        const res = await apiClient.get<User[]>('/users', {
          signal: controller.signal,
        });
        setUsersData(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }

      setIsLoading(false);

      return () => controller.abort();
    };

    fetchUsers();
  }, []);

  // create arrow function to delete user from list
  const deleteUser = async (user: User) => {
    const originalUsers = [...usersData];
    try {
      setUsersData(usersData.filter((u) => u.id !== user.id));
      await apiClient.delete(`/xusers/${user.id}`);
    } catch (error) {
      setError((error as AxiosError).message);
      setUsersData(originalUsers);
    }
  };

  // add user to list
  const addUser = async () => {
    const newUser = { id: 0, name: 'YAYA' };
    setUsersData([newUser, ...usersData]);

    try {
      const res = await apiClient.post<User[]>('/users', newUser);
      setUsersData(res.data);
    } catch (error) {
      setError((error as AxiosError).message);
    }
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
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
