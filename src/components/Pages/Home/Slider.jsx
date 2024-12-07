import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
      <div className="w-full min-h-screen slider1">
        <div className="min-h-screen w-full"></div>
      </div>
      <div className="w-full min-h-screen slider2">
        <div className="min-h-screen w-full"></div>
      </div>
      <div className="w-full min-h-screen slider3">
        <div className="min-h-screen w-full"></div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
