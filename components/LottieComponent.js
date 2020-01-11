import React from "react";
import lotter from "./circle_circle.json";
import Lottie from "react-lottie";
const LottieComponent = () => {
  return (
    <Lottie options={{ autoplay: true, loop: true, animationData: lotter }} />
  );
};

export default LottieComponent;
