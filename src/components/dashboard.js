import React, { Component } from 'react';
import Screen from './screen'
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right, List, ListItem, View } from 'native-base';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
import { connect } from 'react-redux'
class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScreenDisplay: 0,
            header: "Traditional Set Menus",
            stm: true
        }
    }
    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.setState({
                stm: false
            })
            // alert(this.props.todo.length);
        }, 2500)
    }
    // AddTOCARD = (OrdrD, qty) => {
    //     let temporder = this.state.order;
    //     let tot = this.state.Total;
    //     tot += OrdrD.price * qty;
    //     ++temporder;
    //     let obj = {
    //         quantity: qty,
    //         MenuName: OrdrD.menuName,
    //         price: OrdrD.price,
    //         Total: OrdrD.price * qty
    //     };
    //     let temporderDetails = [...this.state.orderDetails];
    //     temporderDetails.push(obj)
    //     this.setState({
    //         order: temporder,
    //         orderDetails: temporderDetails,
    //         Total: tot
    //     })
    // }
    // DeleteToCard = (index) => {
    //     // let temporder = this.state.order;
    //     // --temporder;
    //     // let tot = this.state.Total;
    //     // tot -= this.state.orderDetails[index].Total;
    //     // let temporderDetails = [...this.state.orderDetails];
    //     // temporderDetails.splice(index, 1)
    //     // this.setState({
    //     //     order: temporder,
    //     //     orderDetails: temporderDetails,
    //     //     Total: tot
    //     // })
    // }
    render() {
        return (
            this.state.stm ? <View style={styles.container1}>
                <View style={{ height: width / 1.1 }}></View>

                <View style={{ justifyContent: "flex-end", alignItems: "center", height: width / 4 }}>
                    <View style={{ width: width / 1.01, height: width / 1.5 }}>
                        <Image
                            source={require("../assets/logo1.png")} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
                    </View>
                </View>
                <View style={{ justifyContent: "flex-end", display: "flex", height: width / 1.8 }}>
                    <Text style={{ color: "#7e1416", fontSize: 20, textAlign: "center" }}>Brands</Text>
                </View>
            </View> :
                <Container contentContainerStyle={{ flex: 1 }}>
                    <Header style={styles.hdr}>
                        {/* {this.state.ScreenDisplay = 3  || 2? */}
                        <TouchableOpacity activeOpacity={1} style={{ width: "10%" }}></TouchableOpacity>

                        {/* : ""} */}
                        <TouchableOpacity activeOpacity={1} style={{ width: "70%", backgroundColor: "#C21807", height: "100%", alignSelf: "center", display: "flex", flexDirection: "row", justifyContent: this.state.ScreenDisplay == 3 || this.state.ScreenDisplay == 2 || this.state.ScreenDisplay == 1 ? "center" : "center", alignSelf: "flex-start" }}>
                            <Text style={styles.heading}>{this.state.header}</Text>
                        </TouchableOpacity>
                        {/*  */}
                        <TouchableOpacity activeOpacity={1} style={{ width: "20%", backgroundColor: "#C21807" }}>
                            <Button style={{ elevation: 0, backgroundColor: "#C21807", width: "100%", height: "100%" }} onPress={() => this.props.navigation.navigate('About')} badge vertical>
                                {/* <Badge style={{ width: 22, marginBottom: -7, zIndex: 10 }}> */}
                                {/* <Text style={{ fontSize: 13, color: "white", width: 22, alignSelf: "center" }}>Contact</Text> */}
                                {/* </Badge> */}
                                <Icon name="ios-person" style={{ width: "60%", height: "70%" }} />
                            </Button>
                        </TouchableOpacity>
                    </Header>
                    <Content contentContainerStyle={{ flex: 1 }}>
                        <Screen delete={this.DeleteToCard} card={this.AddTOCARD} navig={this.props.navigation} cardItemsno={this.props.order} totalAmount={this.state.Total} cardItemsdet={this.state.orderDetails} ScrnChng={this.state.ScreenDisplay} />
                    </Content>
                    <Footer style={{ backgroundColor: "#C21807" }}>
                        <FooterTab style={{ backgroundColor: "#C21807" }}>
                            <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 0, header: "Traditional Set Menus" }) }}>
                                <Icon name="apps" />
                                <Text>TSM</Text>
                            </Button>
                            <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1, header: "Royal Mughlai" }) }}>
                                <Icon name="pizza" />
                                <Text>Mughlai</Text>
                            </Button>
                            <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 2, header: "Pan Asian" }) }}>
                                <Icon name="nutrition" />
                                <Text style={{fontSize:9.8}}>Pan Asian</Text>
                            </Button>
                            <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 3, header: "CART" }) }}>
                                <Badge><Text>{this.props.order}</Text></Badge>
                                <Icon name="cart" />
                                <Text>CART</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
        );
    }
}
const styles = StyleSheet.create({
    heading: {
        // textAlign: "center",
        // marginTop: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: "center",
        backgroundColor: "#C21807",
        // fontFamily: "AguafinaScript-Regular"
        fontFamily:"Pacifico"
    },
    hdr: {
        backgroundColor: '#C21807',
        height: width / 6.5
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        // AddOrder: (OrdrD,qty) => { dispatch({ type: 'ADD_TODO', OrderDetails: OrdrD, Quantity: qty }) }
    }
}
const mapStateToProps = (state) => {
    return {
        order: state.order
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(dashboard)