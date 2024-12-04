import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const reviewData = useLoaderData();

  const { thumbnail, title, review, year, genres, email, name } = reviewData;
  return (
    <div className="pt-48">
      <div className="max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        {/* Thumbnail */}
        <img src={thumbnail} alt={title} className="w-full h-96 object-cover" />

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>

          {/* Year and Genre */}
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold">Year:</span> {year}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <span className="font-semibold">Genres:</span> {genres}
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
              // to={`/reviews/${review._id}`}
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
