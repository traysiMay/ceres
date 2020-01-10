import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ImageViewerWeb from "../screens/ImageViewerWeb";

const switchNavigator = createSwitchNavigator({
  Main: { screen: HomeScreen, path: "" },
  Preview: ImageViewerWeb
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
