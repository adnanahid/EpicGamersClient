import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Slider from "./Slider";
import ArticlesList from "./News";
import Accordion from "./Accordion";
import noDataFound from "../../../assets/nodatafound.jpg";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Slider></Slider>

      <Fade cascade damping={0.3}>
        <div className="mt-36">
          <h1 className="text-4xl font-bold text-center mb-12">
            Highest Rated Game
          </h1>
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-xl mx-auto">
              {data.map((review, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-xl mx-auto transition-transform transform hover:scale-105 w-96 md:w-[370px] lg:w-96"
                >
                  <figure>
                    <img
                      src={
                        review.thumbnail ||
                        "https://via.placeholder.com/400x220"
                      }
                      alt={review.title}
                      className="h-[220px] object-cover w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl font-semibold">
                      {review.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      {review.genres || "Genre not specified"}
                    </p>
                    <p className="text-gray-700 text-sm">{review.review}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Published: {review.year || "Unknown"}
                    </p>
                    <p className="text-sm text-gray-500">
                      By: {review.name || "Anonymous"}
                    </p>
                    <p className="text-lg font-semibold mt-4 text-green-600">
                      Rating: {review.rating || "N/A"}
                    </p>
                    <div className="card-actions justify-center">
                      <Link
                        to={`/reviews/${review._id}`}
                        className="btn btn-primary w-full hover:bg-blue-600"
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

        <ArticlesList></ArticlesList>

        <Accordion></Accordion>
      </Fade>
    </div>
  );
};

export default Home;
