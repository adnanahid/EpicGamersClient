import React from "react";

const AboutEpicGamers = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h1 className="pt-24 mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        About Epic Gamers
      </h1>
      <hr className="border-gray-300 mb-8" />

      {/* Content Section */}
      <p className="text-sm sm:text-base md:text-lg leading-relaxed py-6 md:py-12">
        Founded in 1991, Epic Games is an American company founded by CEO Tim
        Sweeney. The company is headquartered in Cary, North Carolina, and has
        dozens of offices worldwide. Epic is a leading interactive entertainment
        company and provider of 3D engine technology. Epic operates one of the
        world’s largest games, Fortnite, which is a vibrant ecosystem of social
        entertainment experiences including first-party games like Fortnite
        Battle Royale, LEGO® Fortnite, Rocket Racing, and Fortnite Festival, as
        well as creator-made experiences.
        <br />
        <br />
        Epic has over 800 million accounts and over 6 billion friend connections
        across Fortnite, Fall Guys, Rocket League, and the Epic Games Store. The
        company also develops Unreal Engine, which powers many of the world’s
        leading games and is also adopted across industries such as film and
        television, broadcast and live events, architecture, automotive, and
        simulation. Through Fortnite, Unreal Engine, Epic Games Store, and Epic
        Online Services, Epic provides an end-to-end digital ecosystem for
        developers and creators to build, distribute, and operate games and
        other content.
      </p>

      {/* Contact Section */}
      <div className="pb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Contact
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
          Epic Gamers, Inc.
        </h3>
        <p className="text-sm sm:text-base md:text-lg">320 Crossroads Nirala</p>
        <p className="text-sm sm:text-base md:text-lg">Khulna, Bangladesh</p>
        <p className="text-sm sm:text-base md:text-lg">Tel: +1 919 854 0070</p>
      </div>
    </div>
  );
};

export default AboutEpicGamers;
