import useFetchData from "../hooks/useFetchData";

const Posts = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
