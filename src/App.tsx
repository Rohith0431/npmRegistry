import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/detatils/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detatilsLoader } from "./pages/detatils/detatilsLoader";
import { homeLoader } from "./pages/home/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detatilsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
