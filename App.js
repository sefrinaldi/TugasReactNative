import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopNavigator } from './components';
import { Chat, Status, Call, Login } from './screen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TopNavigator {...props} />}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Call" component={Call} />
    </Tab.Navigator>
  );
}

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
            name="TopTabs"
            component={TopTabs} />
          {/* <Stack.Screen
            name="Status"
            component={Status} />
          <Stack.Screen
            name="Call"
            component={Call} /> */}
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