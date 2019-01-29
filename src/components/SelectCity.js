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
      this.state.stm ? <View style={styles.container1}>
        <View style={{ height: width / 1.1 }}></View>
        <View style={{ justifyContent: "flex-end", alignItems: "center", height: width / 4 }}>
          <View style={{ width: width / 1.01, height: width / 1.5 }}>
            <Image
              source={require("../assets/logo1.png")} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
          </View>

          <View style={{ height: width / 4 }}>
            {/* <Text style={{ marginTop: '1%', color: "#7e1416", fontSize: fontScale * 35, color: "#7e1416", fontWeight: "bold" }}>Amir Rajput Catering</Text> */}
          </View>

        </View>
        <View style={{ justifyContent: "flex-end", display: "flex", height: width / 1.8 }}>
          <Text style={{ color: "#7e1416", fontSize: 20, textAlign: "center" }}>Brands</Text>
        </View>
      </View> :
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
                    <Input placeholder="Enter a new address" />
                  </Item>
                </View>
                {/* <Autocomplete style={styles.btnText}
                        onChangeText={text => this.setState({ query: text })}
                        renderItem={item => (
                        <TouchableOpacity onPress={() => this.setState({ query: item })}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                        )}
                    /> */}
                <ListItem itemDivider>
                  <Text>More details</Text>
                </ListItem>
                <Item underline style={styles.detailBox}>
                  <Input placeholder="Flat number/ suite / floor" />
                </Item>
                <Item underline style={styles.detailBox}>
                  <Input placeholder="Buisness name" />
                </Item>
                <Item underline style={styles.detailBox}>
                  <Input placeholder="Add delivery note" />
                </Item>
              </View>
            </View>
          </Content>
          <Footer style={{ backgroundColor: "#C21807" }}>
            <Button
              full
              primary
              style={styles.nextBtn}
              onPress={() => this.props.navigation.navigate('Dashboard')}
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
    elevation:0,
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
