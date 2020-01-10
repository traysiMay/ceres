import React from "react";
import { Dimensions, Image, View } from "react-native";

const ImageViewerWeb = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const uri = navigation.getParam("uri");
  return (
    <View>
      <Image style={{ height, width }} source={uri} />
    </View>
  );
};

export default ImageViewerWeb;
