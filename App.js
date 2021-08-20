import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopNavigator } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Chat, Status, Call, Login } from './screen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TopNavigator {...props} />} >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Call" component={Call} />
    </Tab.Navigator>
  );
}

const defaultState = {
  loginStatus: "",
  userList: [{
    id: 1,
    email: "admin@g.co",
    password: "password"
  },{
    id: 2,
    email: "sefrinaldi@g.co",
    password: "password"
  }]
}

const reducer = (state = defaultState, action) => {
  console.log("state : ", state);
  console.log("action : ", action);

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: true        
      }
    default:
      return state
  }
}

const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userLogin: ""
    }
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="TopTabs"
              component={TopTabs}
              options={{ title: "Whatapp" }} />
            {/* <Stack.Screen
            name="Status"
            component={Status} />
          <Stack.Screen
            name="Call"
            component={Call} /> */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;