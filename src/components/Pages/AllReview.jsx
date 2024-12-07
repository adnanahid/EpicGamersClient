import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReview = () => {
  const reviewsData = useLoaderData();
  const [reviews, setReviews] = useState(reviewsData);

  const handleSortByYear = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.year - a.year); // Descending order
    setReviews(sortedReviews);
  };

  const handleSortByRating = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating); // Descending order
    setReviews(sortedReviews);
  };

  return (
    <div className="md:pt-48 max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-24">
        All reviews are here
      </h1>

      {/* Dropdown button */}
      <div className="dropdown flex items-center justify-center">
        <div tabIndex={0} role="button" className="btn m-1 w-24 mb-36">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button onClick={handleSortByYear}>Year</button>
          </li>
          <li>
            <button onClick={handleSortByRating}>Rating</button>
          </li>
        </ul>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-base-100 w-96 md:w-[550px] shadow-xl mx-auto my-6"
          >
            <figure className="object-contain">
              <img
                src={review.thumbnail}
                alt={review.title}
                className="h-[300px] object-fit"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <p>Author: {review.name}</p>
              <p>Email: {review.email}</p>
              <div className="card-actions justify-center">
                <Link
                  to={`/reviews/${review._id}`}
                  className="btn btn-primary w-full"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
