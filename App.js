/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';import { Content, Container, Header, List, ListItem, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon } from "native-base"
import firebase from 'react-native-firebase'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacmg: []
    }
    var config = {
      apiKey: "AIzaSyBu6_k9uyJaNeN3QqxFaZHeVTqN5Yq4Eus",
      authDomain: "technicalsolutions-2fd6c.firebaseapp.com",
      databaseURL: "https://technicalsolutions-2fd6c.firebaseio.com",
      projectId: "technicalsolutions-2fd6c",
      storageBucket: "technicalsolutions-2fd6c.appspot.com",
      messagingSenderId: "800730417694"
    };
    firebase.initializeApp(config);

  }
  UNSAFE_componentWillMount() {
    firebase.database().ref('Orders').once("value").then(success => {
      const product = success.val();
      const keys = Object.keys(product);
      const array = [];
      for (e of keys) {
          array.push(product[e])
      }
      // console.log(array," Worked!!!!!!");
      this.setState({ datacmg: array });
  })
      .catch(err => {
          alert(err)
      }
      )
  }
  render() {
    return (
      <Container>
      {/* <Headers navigation={this.props.navigation} /> */}
      <Content>
          <List>
              {this.state.datacmg && this.state.datacmg.map((item, index) => {
                 return <ListItem key={index} >
                      <Left>
                        <Text>Sorry!!!!!!!!!!!!!!!!!</Text>
                          {/* <Thumbnail square source={{ uri: item.imagelink }} /> */}
                      </Left>
                      <Body>
                          <Text>{item.email}</Text>
                          <Text note numberOfLines={1}>{item.name}</Text>
                      </Body>
                      <Right>
                          <Button transparent>
                              <Text>{item.totalPrice}</Text>
                          </Button>
                      </Right>
                  </ListItem>
              })}
          </List>
      </Content>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
