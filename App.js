import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './main'
import SelectCity from './src/components/SelectCity'
import Details from './src/components/Details'
import Screen from './src/components/screen'
import Dashboard from './src/components/dashboard'
import Card from './src/components/card'
import Cart from './src/components/Cart'
import lunch1 from './src/components/lunch1'
import hightea from './src/components/hightea'
import dinner from './src/components/dinner'
import Lunch from './src/components/Lunch'
import menu from './src/components/menu'
import About from './src/components/About'
// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//               <AppNavigator />
//            </Provider>
//     );
//   }
// }
class HomeScreen extends React.Component {
  render() {
    return (
      // <Provider store={Store}>
      //     <AppNavigator />
      // </Provider>
      <Text>abc</Text>
    )
  }
}

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
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
  lunch1: {
    screen: lunch1,
    navigationOptions: {
      header: null,
    }
  },
  hightea: {
    screen: hightea,
    navigationOptions: {
      header: null,
    }
  },
  dinner: {
    screen: dinner,
    navigationOptions: {
      header: null,
    }
  },
  Lunch: {
    screen: Lunch,
    navigationOptions: {
      header: null,
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null,
    }
  },
  menu: {
    screen: menu,
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
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: null,
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);