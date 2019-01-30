import React, { Component, View } from 'react';
import Screen from './screen'
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right } from 'native-base';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
export default class FooterTabsBadgeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScreenDisplay: 0,
            order: 0,
            header: "Traditional Set Menus"
        }
    }
    render() {
        return (
            <Container contentContainerStyle={{ flex: 1 }}>
                <Header style={styles.hdr}>
                    <TouchableOpacity activeOpacity={1} style={{ width: "20%" }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{ width: "60%", alignSelf: "center" }}>
                        <Text style={styles.heading}>{this.state.header}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{ width: "20%", alignSelf: "center" }}>
                        <Button style={{ elevation: 0, backgroundColor: "#C21807" }} badge vertical>
                            <Badge style={{ height: 22, width: 22, marginBottom: -7, zIndex: 10 }}><Text style={{ fontSize: 13, color: "white", height: 20, width: 22, alignSelf: "center" }}>{this.state.order}</Text></Badge>
                            <Icon name="cart" />
                        </Button>
                    </TouchableOpacity>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Screen ScrnChng={this.state.ScreenDisplay} />
                </Content>
                <Footer style={{ backgroundColor: "#C21807" }}>
                    <FooterTab style={{ backgroundColor: "#C21807" }}>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 0, header: "Traditional Set Menus" }) }}>
                            <Icon name="apps" />
                            <Text>TSM</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1, header: "Royal Mughlai" }) }}>
                            <Icon name="pizza" />
                            <Text>Royal Mughlai</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 2, header: "Pan Asian" }) }}>
                            <Icon name="nutrition" />
                            <Text>Pan Asian</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 3, header: "PROFILE" }) }}>
                            <Badge><Text>{this.state.order}</Text></Badge>
                            <Icon name="cart" />
                            <Text>PROFILE</Text>
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
        height: width / 7.5
    }
});