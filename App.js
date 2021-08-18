import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat, Status, Call, Login } from './screen';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Chat"
            component={Chat} />
          <Stack.Screen
            name="Status"
            component={Status} />
          <Stack.Screen
            name="Call"
            component={Call} />
          <Stack.Screen
            name="Login"
            component={Login} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;