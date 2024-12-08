import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Slider from "./Slider";
import ArticlesList from "./News";
import Accordion from "./Accordion";

const Home = () => {
  const data = useLoaderData();

  // // Const Top 6 rated game
  // const topData = data.slice(1, 7);

  // // Sort data by rating in descending order
  // const sortedData = [...topData].sort(
  //   (a, b) => Number(b.rating) - Number(a.rating)
  // );

  return (
    <div>
      <Slider></Slider>

      <div className="my-36 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">
          Highest Rated Game
        </h1>
        <Fade cascade damping={0.5}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {data.map((review, index) => (
                <div
                  key={index}
                  className="card bg-base-100 w-96 md:w-[400px] shadow-xl mx-auto mb-12"
                >
                  <figure>
                    <img
                      src={review.thumbnail}
                      alt={review.title}
                      className="h-[220px]"
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

      <ArticlesList></ArticlesList>

      <Accordion></Accordion>
    </div>
  );
};

export default Home;
