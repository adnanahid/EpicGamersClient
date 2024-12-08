import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      className="h-[1000px]"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
    >
      <div className="w-full min-h-screen slider1 flex items-center justify-center bg-blue-600 text-white text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Explore New Horizons</h2>
          <p className="text-lg mb-6">Discover the latest adventures in the gaming world, from new releases to exciting updates!</p>
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-md">Learn More</button>
        </div>
      </div>

      <div className="w-full min-h-screen slider2 flex items-center justify-center bg-green-600 text-white text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Level Up Your Skills</h2>
          <p className="text-lg mb-6">Take your gaming experience to the next level with expert tips, guides, and tutorials!</p>
          <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-md">Start Learning</button>
        </div>
      </div>

      <div className="w-full min-h-screen slider3 flex items-center justify-center bg-purple-600 text-white text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-lg mb-6">Connect with other gamers, share your experiences, and be part of an amazing community!</p>
          <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-md">Join Now</button>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
