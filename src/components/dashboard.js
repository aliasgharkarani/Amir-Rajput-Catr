import React, { Component, View } from 'react';
import Screen from './screen'
import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScreenDisplay: 0,
            order:null ,
            header:"Traditional Set Menus"
        }
    }
    render() {
        return (
            <Container contentContainerStyle={{ flex: 1 }}>
                <Header style={styles.hdr}>
                    <Text style={styles.heading}>{this.state.header}</Text>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Screen ScrnChng={this.state.ScreenDisplay} />
                </Content>
                <Footer style={{ backgroundColor: "#C21807" }}>
                    <FooterTab style={{ backgroundColor: "#C21807" }}>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 0 }) }}>
                            <Icon name="apps" />
                            <Text>TSM</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1 }) }}>
                            {/* <Badge><Text>2</Text></Badge> */}
                            <Icon name="pizza" />
                            <Text>SEARCH</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 2 }) }}>
                            <Icon name="nutrition" />
                            {/* <Icon active name="navigate" /> */}
                            <Text>Pan Asian</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 3 }) }}>
                            <Badge ><Text>{this.state.order}</Text></Badge>
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
        backgroundColor: '#C21807'
    }
});