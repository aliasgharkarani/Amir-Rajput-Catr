/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import firebase from 'react-native-firebase'
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/store'

console.disableYellowBox=true;
var config = {
    apiKey: "AIzaSyAwWKfJzZCyxtKZ-y1Nww0OgrDsTB6qZhk",
    authDomain: "amirrajput-412d2.firebaseapp.com",
    databaseURL: "https://amirrajput-412d2.firebaseio.com",
    projectId: "amirrajput-412d2",
    storageBucket: "amirrajput-412d2.appspot.com",
    messagingSenderId: "539969251887"
  };
firebase.initializeApp(config);
const withRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () =>  withRedux);
