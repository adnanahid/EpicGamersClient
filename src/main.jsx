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
import UpdateReview from "./components/Pages/UpdateReview";
import Error from "./components/Pages/Error";
import Private from "./components/PriveteRoute/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3333/topReviews"),
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
        element: (
          <Private>
            <ReviewDetails></ReviewDetails>
          </Private>
        ),
      },
      {
        path: "/addReview",
        element: (
          <Private>
            <AddReview></AddReview>,
          </Private>
        ),
      },
      {
        path: "/myReview",
        loader: () => fetch(`http://localhost:3333/reviews`),
        element: (
          <Private>
            <MyReview></MyReview>,
          </Private>
        ),
      },
      {
        path: "/updateReviews/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3333/reviews/${params.id}`),
        element: (
          <Private>
            <UpdateReview></UpdateReview>,
          </Private>
        ),
      },
      {
        path: "/wishlist",
        loader: () => fetch(`http://localhost:3333/wishlist`),
        element: (
          <Private>
            <WishList></WishList>,
          </Private>
        ),
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
