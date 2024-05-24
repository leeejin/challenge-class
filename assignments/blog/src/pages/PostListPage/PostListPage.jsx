import { Link, useLoaderData } from "react-router-dom";
function PostListPage() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>PostListPage</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id} onClick={() => {}}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default PostListPage;
