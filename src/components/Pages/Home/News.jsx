import React from "react";

const articles = [
  {
    title:
      "Path of Exile 2: 7 tips to help you survive your return to Wraeclast",
    description:
      "With numerous classes, countless skills, and a plethora of challenges, Path of Exile 2 is shaping up to be a meaty ARPG sequel",
    time: "20h ago",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    title: "Marvel Rivals: A guide to all 33 heroes and their playstyles",
    description:
      "With 33 heroes to choose from, Marvel Rivals is bound to be a surefire shooter spectacle—but which character is the perfect match for your playstyle? Our guide can help.",
    time: "1d ago",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    title:
      "How Shatterline combines the roguelike formula with a competitive shooter",
    description:
      "Shatterline is a competitive shooter that combines traditional multiplayer game modes with a deep roguelike campaign to keep you coming back for more.",
    time: "2d ago",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    title: "Six brilliant details in LEGO Star Wars: The Skywalker Saga",
    description:
      "Here are some of our favorite things about the brick-based sci-fi action-adventure",
    time: "2d ago",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
];

const ArticleCard = ({ article }) => {
  return (
    <div className="flex space-x-4 pb-6">
      <img
        src={article.image}
        alt={article.title}
        className="w-28 h-28 object-cover rounded"
      />
      <div>
        <p className="text-sm ">{article.time}</p>
        <h3 className="text-lg font-bold mt-1">{article.title}</h3>
        <p className=" text-sm mt-2">{article.description}</p>
        <button className="text-blue-500 mt-2 text-sm font-semibold">
          Read more
        </button>
      </div>
    </div>
  );
};

const ArticlesList = () => {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-24">
        News for gammer's
      </h1>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
