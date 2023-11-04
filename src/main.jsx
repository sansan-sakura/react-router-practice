import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";

import { MovieProvider } from "./context/MovieContext";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { PageNotFound } from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import { StarDetail } from "./pages/StarDetail";
import { SearchResult } from "./pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home />, errorElement: <PageNotFound /> },
      {
        path: "movie/:id",
        element: <Detail />,
        errorElement: <PageNotFound />,
      },
      {
        path: "star/:id",
        element: <StarDetail />,
        errorElement: <PageNotFound />,
      },
      {
        path: "search/result/:id",
        element: <SearchResult />,
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>
);
