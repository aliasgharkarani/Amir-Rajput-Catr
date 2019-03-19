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

class Details extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
  }
  componentDidMount() {
    // alert("aaaaaaaaaa")
    // setTimeout(() => {
    //   this.props.navigation.navigate("Screen2")
    // }, 2000)
  }
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
            <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white" }}>Engineers & Contractors Mechanical Electrical</Text>
            <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white", textAlign: "center" }}>H.V.A.C</Text>
          </View>
        </View>
        {/* <View style={{ height: width / 8 }}></View> */}
        <View style={{ display: 'flex', alignItems: "center", width: width / 1.02, height: width / 2, alignSelf: "center" }}>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 25,width:width/1.2, color: "white", fontWeight: "bold",textAlign:"center" }}>Director</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 25,width:width/1.2, color: "white", fontWeight: "bold",textAlign:"center" }}>S.Sohail Akhtar Rizvi</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white", textAlign: "center" }}>Suite # A-6/1,2nd Floor,Al-Ahmed Plaza, 13C, Opp.Bait Ul Mukaram Mosque, Karachi.</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white", textAlign: "center" }}>Ph# 021-32062277 Cell: 0300-8275670</Text>
          <Text style={{ marginTop: '1%', color: "#4A4A4A", fontSize: fontScale * 16, color: "white", textAlign: "center" }}>Email: tech.solution07@gmail.com</Text>
        </View>
        <View style={{height: width / 14 }}></View>
        <View style={{display: "flex", flexDirection: "row",alignSelf:"center" }}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>Powered </Text><Text style={{ color: "white", fontSize: 22, textAlign: "center" }}>By AAK-03042054458 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214467',
  },
});

export default Details;