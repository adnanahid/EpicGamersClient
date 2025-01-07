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
import AboutEpicGamers from "./components/Pages/AboutEpicGamers";
import Support from "./components/Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://a10-server-side-iota.vercel.app/topReviews"),
        element: <Home></Home>,
      },
      {
        path: "/allReview",
        loader: () => fetch("https://a10-server-side-iota.vercel.app/reviews"),
        element: <AllReview></AllReview>,
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(`https://a10-server-side-iota.vercel.app/reviews/${params.id}`),
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
        loader: () => fetch(`https://a10-server-side-iota.vercel.app/reviews`),
        element: (
          <Private>
            <MyReview></MyReview>,
          </Private>
        ),
      },
      {
        path: "/updateReviews/:id",
        loader: ({ params }) =>
          fetch(`https://a10-server-side-iota.vercel.app/reviews/${params.id}`),
        element: (
          <Private>
            <UpdateReview></UpdateReview>,
          </Private>
        ),
      },
      {
        path: "/wishlist",
        loader: () => fetch(`https://a10-server-side-iota.vercel.app/wishlist`),
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
      {
        path: "/about-epic",
        element: <AboutEpicGamers></AboutEpicGamers>,
      },
      {
        path: "/support",
        element: <Support></Support>,
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
