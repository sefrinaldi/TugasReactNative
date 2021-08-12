import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text } from 'react-native-elements';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  setValue = value => {
    this.setState({

    })
  }
  render() {
    return (
      <SafeAreaProvider>
        {/* <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
          <View style={styles.container}>
            <Text style={styles.title}>My App</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email..."
                placeholderTextColor="#003f5c"
                onChange={value => this.setState({ email: value })} />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..."
                placeholderTextColor="#003f5c"
                onChange={value => this.setState({ password: value })} />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#009879",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 20,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#009879",
    color: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});

export default App;