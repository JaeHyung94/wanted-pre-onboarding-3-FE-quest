import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout";
import "./styles/index.css";
import { NotFound } from "./pages/404";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Login } from "./pages/login";

export const routerList = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        title: "Page 1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        title: "Page 2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        title: "Page 3",
        element: <Page3 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routerList);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
