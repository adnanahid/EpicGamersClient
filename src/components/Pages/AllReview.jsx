import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import noDataFound from "../../assets/nodatafound.jpg";
import { AuthContext } from "../Provider/AuthProvider";

const AllReview = () => {
  const reviewsData = useLoaderData();
  const [reviews, setReviews] = useState(reviewsData);
  const { loading } = useContext(AuthContext);
  const handleSortByYear = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.year - a.year); // Descending order
    setReviews(sortedReviews);
  };

  const handleSortByRating = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating); // Descending order
    setReviews(sortedReviews);
  };

  const handleFilterByGenre = (genre) => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes(genre)
    );
    setReviews(filteredReviews);
  };


  return (
    <div className="pt-24 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-24">
        All Reviews Are Here
      </h1>

      {/* Dropdown buttons */}
      <div className="flex items-center justify-center mb-20">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 w-28">
            Sort By
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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 w-32">
            Filter By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {[
              "Action",
              "Adventure",
              "RPG",
              "Simulation",
              "Card",
              "Racing",
              "Board",
            ].map((genre) => (
              <li key={genre}>
                <button onClick={() => handleFilterByGenre(genre)}>
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review cards */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card bg-base-100 mb-12 shadow-xl mx-auto w-full max-w-xs sm:max-w-md"
            >
              <figure className="object-contain">
                <img
                  src={review.thumbnail}
                  alt={review.title}
                  className="h-52 md:h-64 lg:h-72 object-fit"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <p>Author: {review.name}</p>
                <p>Email: {review.email}</p>
                <div className="card-actions justify-center">
                  <Link
                    to={`/reviews/${review._id}`}
                    className="btn bg-[#4a4a4d] text-white w-full"
                  >
                    Explore Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center my-12">
          <img
            src={noDataFound}
            alt="No data found"
            className="mx-auto mb-6 w-64 h-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-600">
            No reviews available at the moment.
          </h2>
          <p className="text-gray-500">
            Try adjusting your filters or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllReview;
