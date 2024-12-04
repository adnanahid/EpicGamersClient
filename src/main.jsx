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
import WishList from "./components/Pages/WishList";
import AuthProvider from "./components/Provider/AuthProvider";
import Register from "./components/Pages/Register";
import ReviewDetails from "./components/Pages/ReviewDetails";

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
        loader: () => fetch("http://localhost:3333/reviews"),
        element: <AllReview></AllReview>,
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3333/reviews/${params.id}`),
        element: <ReviewDetails></ReviewDetails>,
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/myReview",
        loader: () => fetch(`http://localhost:3333/reviews`),
        element: <MyReview></MyReview>,
      },
      {
        path: "/wishList",
        element: <WishList></WishList>,
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
