import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const controller = new AbortController();

      setIsLoading(true);

      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );
        setUsersData(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
      
      setIsLoading(false);

      return () => controller.abort();
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
