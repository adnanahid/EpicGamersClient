import React from "react";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const data = useLoaderData();

  // Const Top 6 rated game
  const topData = data.slice(1, 7);

  // Sort data by rating in descending order
  const sortedData = [...topData].sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );

  return (
    <div>
      <Banner></Banner>

      <div className="my-36">
        <h1 className="text-5xl font-bold text-center my-12">
          Highest Rated Game
        </h1>
        <Fade cascade damping={0.5}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-10">
              {sortedData.map((review, index) => (
                <div
                  key={index}
                  className="card bg-base-100 w-96 md:w-[550px] shadow-xl mx-auto"
                >
                  <figure>
                    <img
                      src={review.thumbnail}
                      alt={review.title}
                      className="h-[280px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{review.title}</h2>
                    <p>{review.review}</p>
                    <p>{review.genres}</p>
                    <p>{review.name}</p>
                    <p>{review.year}</p>
                    <p>{review.email}</p>
                    <p className="text-lg font-semibold">
                      Rating: {review.rating}
                    </p>
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
        </Fade>
      </div>
    </div>
  );
};

export default Home;
