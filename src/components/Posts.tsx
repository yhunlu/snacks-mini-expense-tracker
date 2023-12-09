import usePosts from "../hooks/usePosts"

const Posts = () => {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{error.message}</p>;
    if (!data) return <p>loading...</p>;

    return (
        <ul className="list-group">
            {data?.map((post) => (
                <li
                    key={post.id}
                    className="list-group-item list-group d-flex justify-content-between"
                >
                    <span>
                        <strong>{post.id}</strong>
                    </span>
                    {post.title}
                    <ul className="list-group list-group-flush mt-3 mb-3 ms-5 font-monospace font-size-sm font-weight-bold">
                        <li>{post.body}</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Posts