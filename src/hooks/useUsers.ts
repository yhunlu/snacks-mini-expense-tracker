import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
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

  return { usersData, error, isLoading, setUsersData, setError };
};

export default useUsers;
