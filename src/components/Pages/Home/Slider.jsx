import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      className="h-[700px] md:h-[720px] lg:h-[1000px]"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
    >
      {/* Slide 1 */}
      <div className="w-full min-h-screen slider1 flex items-end text-white bg-black relative">
        <div className="p-6 max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-24 md:left-6">
          <h2 className="text-3xl font-bold mb-4">Marvel Rivals</h2>
          <p className="text-md mb-6">
            Play on Epic Games Store! Log in and complete 10 matches in eligible game modes between December 6, 2024, and January 6, 2025, to get the Rivals Sailer Glider for use in Fortnite.
          </p>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="w-full min-h-screen slider2 flex items-end text-white bg-gray-800 relative">
        <div className="p-6 max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-24 md:left-6">
          <h2 className="text-3xl font-bold mb-4">Level Up Your Skills</h2>
          <p className="text-md mb-6">
            Take your gaming experience to the next level with expert tips, guides, and tutorials!
          </p>
          <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-md">
            Start Learning
          </button>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="w-full min-h-screen slider3 flex items-end text-white bg-purple-800 relative">
        <div className="p-6 max-w-lg bg-opacity-80 bg-black rounded-md absolute bottom-24 md:left-6">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-md mb-6">
            Connect with other gamers, share your experiences, and be part of an amazing community!
          </p>
          <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-md">
            Join Now
          </button>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
