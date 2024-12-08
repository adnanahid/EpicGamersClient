import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ReviewDetails = () => {
  const reviewData = useLoaderData();
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const { _id, email, ...restdata } = reviewData; // Exclude `_id` and original `email` from review data

  const [isAdded, setIsAdded] = useState(false); // Track if item is added to wishlist

  const newWish = { ...restdata, userEmail: user?.email };

  const handleWishList = () => {
    fetch(`https://a10-server-side-iota.vercel.app/wishlist`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newWish),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Show success message
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Added to WishList",
        });
        setIsAdded(true); // Disable the button after success
      })
      .catch((err) => {
        console.error("Error adding to wishlist:", err);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add to wishlist. Please try again later.",
        });
      });
  };

  return (
    <div className="pt-24 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Details
      </h1>
      <div className="max-w-3xl  mx-auto rounded-lg shadow-md overflow-hidden">
        {/* Thumbnail */}
        <img
          src={reviewData?.thumbnail}
          alt={reviewData?.title}
          className="w-full h-96 object-cover"
        />

        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{reviewData?.title}</h2>

          <p className="text-sm mb-2">
            <span className="font-semibold">Genres:</span> {reviewData?.genres}
          </p>

          <p className="text-sm mb-2">
            <span className="font-semibold">Release:</span> {reviewData?.year}
          </p>

          <p className="mb-4">
            <span className="font-semibold">Review:</span> {reviewData?.review}
          </p>

          <div className="text-sm">
            <p>
              <span className="font-semibold">Reviewer:</span>{" "}
              {reviewData?.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {reviewData?.email}
            </p>
          </div>
          <div className="card-actions justify-center my-4">
            <button
              onClick={handleWishList}
              disabled={isAdded} // Disable button if item is already added
              className={`btn w-full ${
                isAdded ? "btn-secondary" : "btn-primary"
              }`}
            >
              {isAdded ? "Added to Wish List" : "Add To Wish List"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
