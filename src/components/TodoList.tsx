import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

interface Todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const fetchTodos = () => {
    return apiClient.get<Todo[]>('/todos').then((res) => res.data);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  if (!data) return <p>loading...</p>;

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between"
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
