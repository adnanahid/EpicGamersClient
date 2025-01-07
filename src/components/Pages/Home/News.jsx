import React from "react";
import news1 from "../../../assets/news1.jpg";
import news2 from "../../../assets/news2.jpg";
import news3 from "../../../assets/news3.jpg";
import news4 from "../../../assets/news4.png";

const articles = [
  {
    title:
      "Path of Exile 2: 7 tips to help you survive your return to Wraeclast",
    description:
      "With numerous classes, countless skills, and a plethora of challenges, Path of Exile 2 is shaping up to be a meaty ARPG sequel",
    time: "20h ago",
    image: news1,
    link: "https://store.epicgames.com/en-US/news/marvel-rivals-guide-all-33-heroes-best-playstyles",
  },
  {
    title: "Marvel Rivals: A guide to all 33 heroes and their playstyles",
    description:
      "With 33 heroes to choose from, Marvel Rivals is bound to be a surefire shooter spectacle—but which character is the perfect match for your playstyle? Our guide can help.",
    time: "1d ago",
    image: news2,
    link: "https://store.epicgames.com/en-US/news/shatterline-launch-roguelike-plus-competitive-shooter",
  },
  {
    title:
      "How Shatterline combines the roguelike formula with a competitive shooter",
    description:
      "Shatterline is a competitive shooter that combines traditional multiplayer game modes with a deep roguelike campaign to keep you coming back for more.",
    time: "2d ago",
    image: news3,
    link: "https://store.epicgames.com/en-US/news/breaking-down-all-8-available-operatives-in-delta-force-in-our-guide",
  },
  {
    title: "Six brilliant details in LEGO Star Wars: The Skywalker Saga",
    description:
      "Here are some of our favorite things about the brick-based sci-fi action-adventure",
    time: "2d ago",
    image: news4,
    link: "https://store.epicgames.com/en-US/news/delta-force-open-beta-launch",
  },
];

const ArticleCard = ({ article }) => {
  return (
    <div className="flex space-x-4 pb-6 px-1">
      <img
        src={article.image}
        alt={article.title}
        className="w-28 h-28 object-cover rounded"
      />
      <div>
        <p className="text-sm ">{article.time}</p>
        <h3 className="text-lg font-bold mt-1">{article.title}</h3>
        <p className=" text-sm mt-2">{article.description}</p>
        <a href={article.link} target="_blank">
          <button className="text-blue-500 mt-2 text-sm font-semibold">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
};

const ArticlesList = () => {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto px-1">
      <h1 className="text-4xl font-bold text-center mb-12">
        News for gammer's
      </h1>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
