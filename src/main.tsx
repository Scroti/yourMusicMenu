import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Callback from "./Callback";
import TopSongs from "./TopSongs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/tt",
    element: <TopSongs />,
  },
]);
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
