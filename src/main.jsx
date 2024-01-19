import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import Edit from "./routes/Edit.jsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "edit",
    element: <Edit />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider
      defaultSetOptions={{ path: "/", secure: true, sameSite: "none" }}>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
