import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Home = lazy(() => import("./pages/Home"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
