import React from "react";

const SalesSpecials = () => {
  const salesData = [
    {
      title: "HOLIDAY SALE",
      icon: "❄️", // Replace with a proper icon or emoji
      link: "https://store.epicgames.com/en-US/sales-and-specials/holiday-sale",
    },
    {
      title: "REWARDS BOOSTED TO 10%",
      icon: "⭐", // Replace with a proper icon or emoji
      link: "https://store.epicgames.com/en-US/features/epic-rewards",
    },
    {
      title: "FEATURED GIVEAWAYS",
      icon: "🎁", // Replace with a proper icon or emoji
      link: "https://store.epicgames.com/en-US/free-games",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Epic Games Sales & Specials
          </h2>
          <p className="text-lg">
            The Epic Games Store offers several sales and specials throughout
            the year. Every Epic Games Sale offers different savings so be sure
            to check back often for details.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {salesData.map((sale, index) => (
            <a
              href={sale.link}
              target="_blank"
              className={`rounded-lg overflow-hidden shadow-lg p-6 bg-[#4a4a4d] text-white hover:scale-105 transform transition-all duration-500 ease-in-out`}
            >
              <div key={index}>
                {/* Icon */}
                <div className="text-4xl text-center">{sale.icon}</div>

                {/* Content */}
                <div className="flex flex-col justify-center items-center text-center h-full">
                  <p className="text-lg font-semibold mb-2">{sale.date}</p>
                  <h3 className="text-3xl font-bold">{sale.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesSpecials;
