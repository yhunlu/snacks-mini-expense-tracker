import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const controller = new AbortController();

      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );
        setUsersData(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }

      return () => controller.abort();
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
