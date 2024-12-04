import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReview = () => {
  const reviews = useLoaderData();
  console.log(reviews);
  return (
    <div className="md:pt-48 max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-24">
        All reviews are here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-base-100 w-96 md:w-[550px] shadow-xl mx-auto"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <h2 className="card-title">{review._id}</h2>
              <p>{review.review}</p>
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
