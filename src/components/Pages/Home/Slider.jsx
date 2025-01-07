import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      className="h-[400px] md:h-[520px] lg:h-[700px] relative"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
    >
      {/* Slide 1 */}
      <div className="w-full h-full slider1 flex items-end text-white bg-black">
        <div className="p-4 md:p-6 max-w-md md:max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-4 left-4 md:bottom-8 md:left-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
            Marvel Rivals
          </h2>
          <p className="text-sm md:text-md mb-4 md:mb-6">
            Play on Epic Games Store! Log in and complete 10 matches in eligible
            game modes between December 6, 2024, and January 6, 2025, to get the
            Rivals Sailer Glider for use in Fortnite.
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="w-full h-full slider2 flex items-end text-white bg-gray-800">
        <div className="p-4 md:p-6 max-w-md md:max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-4 left-4 md:bottom-8 md:left-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
            Level Up Your Skills
          </h2>
          <p className="text-sm md:text-md mb-4 md:mb-6">
            Take your gaming experience to the next level with expert tips,
            guides, and tutorials!
          </p>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="w-full h-full slider3 flex items-end text-white bg-purple-800">
        <div className="p-4 md:p-6 max-w-md md:max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-4 left-4 md:bottom-8 md:left-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
            Join the Community
          </h2>
          <p className="text-sm md:text-md mb-4 md:mb-6">
            Connect with other gamers, share your experiences, and be part of an
            amazing community!
          </p>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
