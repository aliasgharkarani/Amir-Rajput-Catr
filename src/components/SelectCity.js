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
  ScrollView,
  ToastAndroid
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
import firebase from 'react-native-firebase'
const { height, width, fontScale } = Dimensions.get('window');
import { connect } from 'react-redux'
class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      name: "",
      email: "",
      mobile: "",
      date: "",
      note: ""
    }
    this.AddToDB = this.AddToDB.bind(this);
  }
  UNSAFE_componentWillMount() {
    let dt = new Date();
    let c = dt.getTime().toString();
    this.setState({
      date: c
    })
  }
  AddToDB() {
    if (this.state.name.length > 2 && this.state.mobile.length == 11 && this.state.email.length > 5 && this.state.address.length > 3) {
      firebase.database().ref(`Orders/${this.state.name.toLowerCase().charAt(0)}${this.state.email.toLowerCase().slice(0, 3)}${this.state.date}`).set({
        name: this.state.name,
        phoneno: this.state.mobile,
        email: this.state.email,
        location: this.state.address,
        ordered: this.props.todo,
        totalPrice: this.props.total
      }).then((d) => {
        let ordNo = `${this.state.name.toLowerCase().charAt(0)}${this.state.email.toLowerCase().slice(0, 3)}${this.state.date}`;
        this.props.navigation.navigate('Details', { OrderNo: ordNo });
        this.props.OrderDone();
        ToastAndroid.show("Your Order is Booked , Thanks for contacting!", ToastAndroid.SHORT);
        this.setState({
          name: "",
          mobile: "",
          email: "",
          address: "",
          note: ""
        })
      }).catch((er) => {
        ToastAndroid.show("Sorry Not Sent", ToastAndroid.SHORT);
      })
    }
  }
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
                  keyboardType="numeric"               
               />
              </Item>
              <Item underline style={styles.detailBox}>
                <Input placeholder="Email"
                  onChangeText={(email) => { this.setState({ email }); }}
                  value={this.state.email}
                />
              </Item>
              <Item underline style={styles.detailBox}>
                <Input placeholder="Add delivery note"
                  onChangeText={(note) => { this.setState({ note }); }}
                  value={this.state.note}
                />
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
}); SelectCity
const mapDispatchToProps = (dispatch) => {
  return {
    OrderDone: () => { dispatch({ type: 'CLEAR_TODO' }) }
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    total: state.total,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectCity)