import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './main'
import SelectCity from './src/components/SelectCity'
import Screen from './src/components/screen'
import Dashboard from './src/components/dashboard'
import Card from './src/components/card'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
    }
  },
  Screen: {
    screen: Screen,
    navigationOptions: {
      header: null,
    }
  },
  SelectCity: {
    screen: SelectCity,
    navigationOptions: {
      header: null,
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);