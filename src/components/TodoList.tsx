import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const { data, error, isLoading } = useTodos();

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
