import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { CoinRacing } from "./pages/CoinRacing";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "racing",
        element: <CoinRacing />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
