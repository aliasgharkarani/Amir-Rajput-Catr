import React, { Component, View } from 'react';
import Screen from './screen'
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right, List, ListItem } from 'native-base';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
export default class FooterTabsBadgeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScreenDisplay: 0,
            order: 0,
            orderDetails: [],
            header: "Traditional Set Menus",
            Total: 0
        }
    }
    AddTOCARD = (OrdrD, qty) => {
        // console.log(OrdrD, "orderDetail");
        let temporder = this.state.order;
        let tot = this.state.Total;
        tot += OrdrD.price * qty;
        ++temporder;
        let obj = {
            quantity: qty,
            MenuName: OrdrD.menuName,
            price: OrdrD.price
        };
        // console.log(obj," New Object!!!");
        let temporderDetails = [...this.state.orderDetails];
        temporderDetails.push(obj)
        this.setState({
            order: temporder,
            orderDetails: temporderDetails,
            Total: tot
        })
        // this.pricecal();
    }
    // pricecal = () => {
    //     console.warn(this.state.orderDetails);
    // let tot = this.state.Total;
    // for (let i = 0; i < this.state.orderDetails.length; i++) {
    //     tot += this.state.orderDetails[i].price * this.state.orderDetails[i].quantity;
    // }
    // this.setState({
    //     Total: tot
    // })
    // console.log(tot);
    // console.log(this.state.Total);
    // }
    render() {
        return (
            <Container contentContainerStyle={{ flex: 1 }}>
                <Header style={styles.hdr}>
                    <TouchableOpacity activeOpacity={1} style={{ width: "20%" }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{ width: "60%", alignSelf: "center" }}>
                        <Text style={styles.heading}>{this.state.header}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{ width: "30%", backgroundColor: "#C21807" }}>
                        <Button style={{ elevation: 0, backgroundColor: "#C21807", width: "100%" }} onPress={() => { this.setState({ ScreenDisplay: 3, header: "CARD" }) }} badge vertical>
                            <Badge style={{ width: 22, marginBottom: -7, zIndex: 10 }}><Text style={{ fontSize: 13, color: "white", width: 22, alignSelf: "center" }}>{this.state.order}</Text></Badge>
                            <Icon name="cart" />
                        </Button>
                    </TouchableOpacity>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Screen card={this.AddTOCARD} cardItemsno={this.state.order} totalAmount={this.state.Total} cardItemsdet={this.state.orderDetails} ScrnChng={this.state.ScreenDisplay} />
                </Content>
                <Footer style={{ backgroundColor: "#C21807" }}>
                    <FooterTab style={{ backgroundColor: "#C21807" }}>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 0, header: "Traditional Set Menus" }) }}>
                            <Icon name="apps" />
                            <Text style={{ fontSize: 7 }}>Traditional</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1, header: "Royal Mughlai" }) }}>
                            <Icon name="pizza" />
                            <Text style={{ fontSize: 7 }}>Royal Mughlai</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 2, header: "Pan Asian" }) }}>
                            <Icon name="nutrition" />
                            <Text>Pan Asian</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 3, header: "CARD" }) }}>
                            <Badge><Text>{this.state.order}</Text></Badge>
                            <Icon name="cart" />
                            <Text>Card</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        color: 'white'
    },
    hdr: {
        backgroundColor: '#C21807',
        height: width / 6.5
    }
});