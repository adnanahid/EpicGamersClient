import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReview = () => {
  const reviewsData = useLoaderData();
  const [reviews, setReviews] = useState(reviewsData);
  console.log(reviews);

  const handleSortByYear = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.year - a.year); // Descending order
    setReviews(sortedReviews);
  };

  const handleSortByRating = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating); // Descending order
    setReviews(sortedReviews);
  };

  const handleFilterByAction = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Action")
    );
    setReviews(filteredReviews);
  };

  const handleFilterByAdventure = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Adventure")
    );
    setReviews(filteredReviews);
  };

  const handleFilterByRPG = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("RPG")
    );
    setReviews(filteredReviews);
  };

  const handleFilterBySimulation = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Simulation")
    );
    setReviews(filteredReviews);
  };

  const handleFilterByCard = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Card")
    );
    setReviews(filteredReviews);
  };

  const handleFilterByRacing = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Racing")
    );
    setReviews(filteredReviews);
  };

  const handleFilterByBoard = () => {
    const filteredReviews = reviewsData.filter((review) =>
      review.genres.includes("Board")
    );
    setReviews(filteredReviews);
  };

  return (
    <div className="md:pt-48 pt-24 max-w-screen-xl mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-center ;lg:mb-24 mb-6">
        All reviews are here
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
            <li>
              <button onClick={handleFilterByAction}>Action</button>
            </li>
            <li>
              <button onClick={handleFilterByAdventure}>Adventure</button>
            </li>
            <li>
              <button onClick={handleFilterByRPG}>RPG</button>
            </li>
            <li>
              <button onClick={handleFilterBySimulation}>Simulation</button>
            </li>
            <li>
              <button onClick={handleFilterByCard}>Card</button>
            </li>
            <li>
              <button onClick={handleFilterByRacing}>Racing</button>
            </li>
            <li>
              <button onClick={handleFilterByBoard}>Board</button>
            </li>
          </ul>
        </div>
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
