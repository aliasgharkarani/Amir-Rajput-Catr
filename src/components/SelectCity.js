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
import {
  Footer,
  Text,
  View,
  CheckBox,
  Body,
  Button,
  Container,
  Content,
  Item,
  Input,
  Header,
  ListItem,
} from 'native-base';
// import { bold } from 'ansi-colors';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase'
const { height, width, fontScale } = Dimensions.get('window');
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      name: "",
      email: "",
      mobile: ""
    }
    this.AddToDB = this.AddToDB.bind(this);
  }
  AddToDB() {
    // let name1 = this.state.name;
    // let ph = this.state.phoneno;
    // let email1 = this.state.email;
    // let location1 = this.state.location;

    // if (name1.length > 1 && ph.length == 11 && email1.length > 5 && location1.length > 6) {
    firebase.database().ref(`Orders/${this.state.name}-${this.state.mobile}`).set({
      name: this.state.name,
      phoneno: this.state.mobile,
      email: this.state.email,
      location: this.state.address,
      ordered: this.props.navigation.state.params.order,
      totalPrice: this.props.navigation.state.params.cost
    }).then((d) => {
      // this.setState({
      //     name: "",
      //     phoneno: "",
      //     email: "",
      //     location: ""
      // })
      this.props.navigation.navigate('Details')
      ToastAndroid.show("Your Order is Booked , Thanks for contacting!", ToastAndroid.SHORT);
    }).catch((er) => {
      ToastAndroid.show("Sorry Not Sent", ToastAndroid.SHORT);
    })
  }
  // else {
  //     ToastAndroid.show("Add Correct Data", ToastAndroid.SHORT);
  // }
  // }
  render() {
    return (
      <Container>
        <Header style={styles.hdr}>
          <Text style={styles.heading}>Delivery details</Text>
        </Header>
        <Content>
          <View style={styles.container}>
            <View>
              <ListItem itemDivider>
                <Text>Select Delivery Address</Text>
              </ListItem>

              <View>
                <Item regular>
                  <Input placeholder="Enter a new address"
                    onChangeText={(address) => { this.setState({ address }); }}
                    value={this.state.address}
                  />
                </Item>
              </View>
              <ListItem itemDivider>
                <Text>More details</Text>
              </ListItem>
              <Item underline style={styles.detailBox}>
                <Input placeholder="First Name"
                  onChangeText={(name) => { this.setState({ name }); }}
                  value={this.state.name}
                />
              </Item>
              <Item underline style={styles.detailBox}>
                <Input placeholder="Cell no"
                  onChangeText={(mobile) => { this.setState({ mobile }); }}
                  value={this.state.mobile}
                />
              </Item>
              <Item underline style={styles.detailBox}>
                <Input placeholder="Email"
                  onChangeText={(email) => { this.setState({ email }); }}
                  value={this.state.email}
                />
              </Item>
              <Item underline style={styles.detailBox}>
                <Input placeholder="Add delivery note" />
              </Item>
            </View>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#C21807" }} >
          <Button
            full
            primary
            style={styles.nextBtn}
            onPress={() => this.AddToDB()}
          >
            <Text style={styles.btnText}>Book</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#a4a3ab5e',
    height,
    width
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    height: height / 1.2
  },
  heading: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: 'white'
  },
  pwd: {
    margin: 20
  },
  hdr: {
    backgroundColor: '#C21807'
  },

  nextBtn: {
    textAlign: "center",
    backgroundColor: '#C21807',
    elevation: 0,
  },
  btnText: {
    textAlign: "center",
    fontSize: 22,
    color: "white",

  },
  detailBox: {
    margin: 5,
    padding: 5
  }
});