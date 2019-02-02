// import React from "react";
// import { View, Text, Button } from "react-native";
// import Main from './main'
// import SelectCity from './src/components/SelectCity'
// import { createStackNavigator, createAppContainer } from "react-navigation";
// class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Router</Text>
//       </View>
//     );
//   }
// }
// const AppNavigator = createStackNavigator({
//   Main: {
//     screen: Main,
//     navigationOptions: {
//       header: null,
//     }
//   },
//   SelectCity: {
//     screen: SelectCity,
//     navigationOptions: {
//       header: null,
//     }
//   },
// });

// export default createAppContainer(AppNavigator);


import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './main'
import SelectCity from './src/components/SelectCity'
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
  Dashboard: {
    screen: Dashboard,
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
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);