import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postsDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostListPage from "../pages/PostListPage";
import postsListPageLoader from "../pages/PostListPage/PostsListPage.loader";
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
        loader: postsListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postsDetailPageLoader,
      },
    ],
  },
]);

export default router;
