import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const reviewData = useLoaderData();
  const { _id, thumbnail, title, review, year, genres, email, name } =
    reviewData;

  const handleWishList = (_id) => {
    fetch(`http://localhost:3333/wishlist`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          title: "Add to WishList",
        });
      });
  };
  return (
    <div className="pt-48">
      <div className="max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        {/* Thumbnail */}
        <img src={thumbnail} alt={title} className="w-full h-96 object-cover" />

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>

          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold">Genres:</span> {genres}
          </p>

          {/* Year and Genre */}
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold">Release:</span> {year}
          </p>

          {/* Review */}
          <p className="text-gray-300 mb-4">
            <span className="font-semibold">Review:</span> {review}
          </p>

          {/* User Info */}
          <div className="text-gray-400 text-sm">
            <p>
              <span className="font-semibold">Reviewer:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
          <div className="card-actions justify-center my-4">
            <div
              onClick={() => handleWishList(_id)}
              to={`/wishlist/${_id}`}
              className="btn btn-primary w-full"
            >
              Add To Wish List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
