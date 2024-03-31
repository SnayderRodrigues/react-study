import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import WorkPage from "./pages/work/WorkPage.jsx";
import ExpertisePage from "./pages/expertise/ExpertisePage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "about",
//     element: <AboutPage />,
//   },
//   {
//     path: "work",
//     element: <WorkPage />,
//   },
//   {
//     path: "expertise",
//     element: <ExpertisePage />,
//   },
//   {
//     path: "contact",
//     element: <ContactPage />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "expertise",
        element: <ExpertisePage />,
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
