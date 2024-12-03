import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Pages/Home/Home";
import AllReview from "./components/Pages/AllReview";
import AddReview from "./components/Pages/AddReview";
import LogIn from "./components/Pages/LogIn";
import MyReview from "./components/Pages/MyReview";
import GameWatchList from "./components/Pages/GameWatchList";
import AuthProvider from "./components/Provider/AuthProvider";
import Register from "./components/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allReview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/gameWatchList",
        element: <GameWatchList></GameWatchList>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
