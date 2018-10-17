import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class LoginScreen extends Component {
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
