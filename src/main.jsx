import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog, Error404, Film, Home } from "./pages";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:id",
    element: <Film />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
