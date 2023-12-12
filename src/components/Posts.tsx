import React from 'react';
import usePosts from '../hooks/usePosts';

const Posts = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  if (!data) return <p>loading...</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li
                key={post.id}
                className="list-group-item list-group d-flex justify-content-between"
              >
                <span>
                  <strong>
                    <h1 className="text-primary font-monospace">
                      {`USERID: ${post.userId}`}
                    </h1>
                    <h2 className="text-secondary font-monospace">
                      {`POSTID: ${post.id}`}
                    </h2>
                  </strong>
                </span>
                {post.title}
                <ul className="list-group list-group-flush mt-3 mb-3 ms-5 font-monospace font-size-sm font-weight-bold">
                  <li>{post.body}</li>
                </ul>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary ms-3"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
};

export default Posts;
