import useFetchData from "../hooks/useFetchData";

function Posts() {
  const { data: posts, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts && posts.slice(0, 5).map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}

export default Posts;
