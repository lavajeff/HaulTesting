import { Navigation } from "react-native-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const screens = [
  {
    screen: LoginScreen,
    componentFactoryId: "LoginScreen"
    // path: "../../containers/Login/connector"
  },
  {
    screen: HomeScreen,
    componentFactoryId: "HomeScreen"
    // path: "../../containers/Login/connector"
  }
];

// Wrapping screens with makeHot() for HMR
export function registerScreens() {
  screens.map(e => {
    Navigation.registerComponent(e.componentFactoryId, () => e.screen);
  });
}
