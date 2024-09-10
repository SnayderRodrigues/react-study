import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import CoursesPage from "./pages/courses/CoursesPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import BlogArticlePage from "./pages/blog/BlogArticlePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:slug",
        element: <BlogArticlePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
