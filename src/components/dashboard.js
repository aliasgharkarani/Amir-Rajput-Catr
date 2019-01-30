import React, { Component, View } from 'react';
import Screen from './screen'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right } from 'native-base';
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
                    {/* <Left> */}
                    {/* <Button transparent> */}
                    {/* <Icon name="arrow-back" /> */}
                    {/* </Button> */}
                    {/* </Left> */}
                    {/* <Body style={{backgroundColor:"yellow"}}> */}
                    <TouchableOpacity style={{ width: "20%" }}></TouchableOpacity>
                    <TouchableOpacity style={{ width: "60%" }}>
                        <Text style={styles.heading}>{this.state.header}</Text>
                    </TouchableOpacity>
                    {/* </Body> */}
                    {/* <Right> */}
                    <TouchableOpacity style={{ width: "20%",alignSelf:"center"}}>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </TouchableOpacity>
                    {/* </Right> */}
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
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1, header: "Search" }) }}>
                            {/* <Badge><Text>2</Text></Badge> */}
                            <Icon name="pizza" />
                            <Text>SEARCH</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 2, header: "Pan Asian" }) }}>
                            <Icon name="nutrition" />
                            {/* <Icon active name="navigate" /> */}
                            <Text>Pan Asian</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 3, header: "PROFILE" }) }}>
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