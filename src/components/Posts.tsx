import { useState } from 'react';
import usePosts from '../hooks/usePosts';

const Posts = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  if (!data) return <p>loading...</p>;

  return (
    <>
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
      <button className="btn btn-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button className="btn btn-primary ms-3" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default Posts;
