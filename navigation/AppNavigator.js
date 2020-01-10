import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createSwitchNavigator({
    Home: HomeScreen
  })
);
