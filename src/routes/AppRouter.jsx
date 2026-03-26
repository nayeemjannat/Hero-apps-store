import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

//loading animation
const navigationLoader = async () => {
  return new Promise(resolve => setTimeout(resolve, 500));
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: navigationLoader,
      },
      {
        path: "/apps",
        element: <AllApps />,
        loader: navigationLoader,
      },
      {
        path: "/app-details/:id",
        element: <AppDetails />,
        loader: navigationLoader,
      },
      {
        path: "/installation",
        element: <div className="text-center py-20 text-2xl font-bold">Installation Guide (Coming Soon...)</div>,
        loader: navigationLoader,
      }
    ],
  },
]);

export default AppRouter;

