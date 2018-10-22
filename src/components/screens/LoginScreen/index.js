import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SplashScreen from "react-native-splash-screen";
import codePush from "react-native-code-push";

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
};

class LoginScreen extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  login = () => {
    const formData = new FormData();
    formData.append("user", "");
    formData.append("password", "");
    formData.append("tokenType", "token");

    fetch("https://www.openlearning.com/json/auth", {
      method: "POST",
      body: formData,
      credentials: "omit"
    })
      .then(res => {
        if (res.ok) {
          return res.json().then(result => {
            this.props.navigator.push({
              screen: "HomeScreen",
              title: "Home",
              passProps: { result }
            });
          });
        }
      })
      .catch(err => console.log(err));
  };

  push = () => {
    console.log("pushinggggg");
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login screen</Text>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.push}>
          <Text style={styles.buttonText}>Code Push</Text>
        </TouchableOpacity>
        <Text>Added this via codepush</Text>
        <Text>CODE PUSH WORKING</Text>
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

LoginScreen = codePush(codePushOptions)(LoginScreen);
export default LoginScreen;
