import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SplashScreen from "react-native-splash-screen";

export default class LoginScreen extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  login = () => {
    console.log("logging in");
    this.props.navigator.push({
      screen: "HomeScreen",
      title: "Home"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login screen</Text>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    padding: 20,
    backgroundColor: "grey"
  },
  buttonText: {
    color: "white"
  }
});
