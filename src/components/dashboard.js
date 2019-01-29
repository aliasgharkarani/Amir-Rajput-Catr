import React, { Component, View } from 'react';
import Screen from './screen'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScreenDisplay: 0
        }
    }
    render() {
        return (
            <Container>
                {/* <Header>
                    <Left />
                    <Body>
                        <Title>Delivery details</Title>
                    </Body>
                    <Right />
                </Header> */}
                <Content>
                    <Screen ScrnChng={this.state.ScreenDisplay} />
                </Content>
                <Footer style={{ backgroundColor: "#C21807" }}>
                    <FooterTab style={{ backgroundColor: "#C21807" }}>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 0 }) }}>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>HOME</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 1 }) }}>
                            <Icon name="camera" />
                            <Text>SEARCH</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} badge vertical onPress={() => { this.setState({ ScreenDisplay: 2 }) }}>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>HISTORY</Text>
                        </Button>
                        <Button style={{ elevation: 0 }} vertical onPress={() => { this.setState({ ScreenDisplay: 3 }) }}>
                            <Icon name="person" />
                            <Text>PROFILE</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}