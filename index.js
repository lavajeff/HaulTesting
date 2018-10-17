// import App from "./src/boot";

// App();

import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/components/screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "LoginScreen",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    },
    navigatorButtons: {}
  }
});

// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: "One",
//       screen: "LoginScreen", // this is a registered name for a screen
//       title: "Login"
//     },
//     {
//       label: "Two",
//       screen: "HomeScreen",
//       title: "Home"
//     }
//   ]
// });
