import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { Button, CheckBox, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const { height, width, fontScale } = Dimensions.get('window');

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
  }
  // componentDidMount() {
  // alert("aaaaaaaaaa")
  // setTimeout(() => {
  //   this.props.navigation.navigate("Screen2")
  // }, 2000)
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: width / 8 }}></View>
        <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
          <View style={{ width: width / 1.01, height: width / 1.5 }}>
            <Image
              source={require("../assets/logo1.png")} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
          </View>

          <View>
            {/* <Text style={{ marginTop: '2%', color: "#4A4A4A", fontSize: fontScale * 35, color: "white", fontWeight: "bold",textAlign:"center" }}>Fix My AC</Text> */}
            {/* <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white" }}>Engineers & Contractors Mechanical Electrical</Text> */}
            {/* <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white", textAlign: "center" }}>H.V.A.C</Text> */}
          </View>
        </View>
        {/* <View style={{ height: width / 8 }}></View> */}
        <View style={{ display: 'flex', alignItems: "center", width: width / 1.02, height: width / 2, alignSelf: "center" }}>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 25, width: width / 1.2, color: "#0645ad", fontWeight: "bold", textAlign: "center" }}>CEO</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 25, width: width / 1.2, color: "#0645ad", fontWeight: "bold", textAlign: "center" }}>Amir Rajput</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Suite # Darwaish Colony, Karachi, Karachi City, Sindh.</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Arshee - 0300-8251337</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Shakeel - 0300-2130196</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Ali - 0346-3786000</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Sarfraz - 0300-8252022</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "#0645ad", textAlign: "center" }}>Email:inquiry@amirrajput.com</Text>
          {/* {this.props.navigation.state.params.OrderNo ? */}
          {/* <Text style={{ marginTop: '30%', color: "red", fontSize: 30, textAlign: "center" }}>{this.props.navigation.state.params.OrderNo}</Text> */}
          {/* : ""} */}
        </View>
        <View style={{ height: width / 14 }}></View>
        {/* <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
          {this.props.navigation.state.params.OrderNo ?
              <Text style={{ color: "#0645ad", fontSize: 20, textAlign: "center" }}>{this.props.navigation.state.params.OrderNo}</Text>

              : null} */}
        {/* </View> */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#214467',
  },
});

export default About;