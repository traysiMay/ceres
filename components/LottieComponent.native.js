import LottieView from "lottie-react-native";
import React from "react";
import lotter from "./circle_circle.json";

const LottieComponent = () => {
  return <LottieView source={lotter} autoPlay loop />;
};

export default LottieComponent;
