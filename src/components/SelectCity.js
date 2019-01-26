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
  Image,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView
} from 'react-native';
import { Container, Header, Content, Footer, Button, Text, View, ListItem, CheckBox, Body } from 'native-base';
// import { bold } from 'ansi-colors';
// import { createStackNavigator, createAppContainer } from "react-navigation";
const { height, width, fontScale } = Dimensions.get('window');
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stm: true,
    }
    // this.onSubmit = this.onSubmit.bind(this);
  }
  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({
        stm: false
      })
    }, 2500)
  }
  render() {
    return (
      this.state.stm ? <View style={styles.container}>
        <View style={{ height: width / 1.1 }}></View>
        <View style={{ justifyContent: "flex-end", alignItems: "center", height: width / 4 }}>
          <View style={{ width: width / 1.01, height: width / 1.5 }}>
            <Image
              source={require("../assets/logo.png")} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
          </View>

          <View style={{ height: width / 4 }}>
            <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 35, color: "white", fontWeight: "bold" }}>Amir Rajput Catering</Text>
          </View>

        </View>
        <View style={{ justifyContent: "flex-end", display: "flex", height: width / 1.8 }}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>Brands</Text>
        </View>
      </View> :
        <Container>
          <View style={{ display: "flex", justifyContent: "center", backgroundColor: 'red', width: '100%', height: 45 }}>
            <Text style={{ textAlign: "center", fontSize: 23, fontWeight: 'bold', color: "white" }}>Amir Rajput Catering</Text>
          </View>
          <ScrollView>
            <ListItem>
              <CheckBox checked={true} color="blue" />
                <Text>Comming Soon</Text>
              <Body>
              </Body>
            </ListItem>
            <Content />
          </ScrollView>
          <Footer>
            <Button full style={{ elevation: 0, width: "100%" }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: "white" }}>Move Ahead</Text>
            </Button>
          </Footer>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#214467',
    height,
    width
  },
});
