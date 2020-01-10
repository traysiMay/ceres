import { Dimensions, Platform } from "react-native";
export const webMobile =
  Platform.OS === "web" && Dimensions.get("window").width < 768;

export const webDesk =
  Platform.OS === "web" && Dimensions.get("window").width > 768;
