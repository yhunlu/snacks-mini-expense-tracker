import { useState } from 'react';
import usePosts from '../hooks/usePosts';

const Posts = () => {
  const [userId, setUserId] = useState<number>();

  const { data, data: datauserId, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  if (!data) return <p>loading...</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value="">All users</option>
        {/* all users without duplication */}
        {datauserId
          .map((post) => post.userId)
          // to remove duplicate user IDs from the array. It keeps only the first occurrence of each unique user ID.
          .filter((userId, index, self) => self.indexOf(userId) === index)
          .map((userId) => (
            <option key={userId} value={userId}>
              {`User ${userId}`}
            </option>
          ))}
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li
            key={post.id}
            className="list-group-item list-group d-flex justify-content-between"
          >
            <span>
              <strong>
                <h1 className="text-primary font-monospace">{`USERID: ${post.userId}`}</h1>
                <h2 className="text-secondary font-monospace">{`POSTID: ${post.id}`}</h2>
              </strong>
            </span>
            {post.title}
            <ul className="list-group list-group-flush mt-3 mb-3 ms-5 font-monospace font-size-sm font-weight-bold">
              <li>{post.body}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
