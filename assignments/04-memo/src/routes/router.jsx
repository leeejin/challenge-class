import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import DefaultLayout from "../layouts/DefaultLayout";
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
    ],
  },
]);
export default router;
