/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './main'
import {name as appName} from './app.json';
console.disableYellowBox=true;
AppRegistry.registerComponent(appName, () => Main);
