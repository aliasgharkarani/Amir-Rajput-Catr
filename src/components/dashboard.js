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
                <Header>
                    <Left />
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Screen ScrnChng={this.state.ScreenDisplay} />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button badge vertical onPress={() => { this.setState({ ScreenDisplay: 0 }) }}>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical onPress={() => { this.setState({ ScreenDisplay: 1 }) }}>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical onPress={() => { this.setState({ ScreenDisplay: 2 }) }}>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical onPress={() => { this.setState({ ScreenDisplay: 3 }) }}>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}