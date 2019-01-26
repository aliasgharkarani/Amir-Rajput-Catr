import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List,
  Thumbnail,
  Icon,
  Switch
} from "native-base";
import BackgroundImg from "../../assests/images/backgroundImg.jpeg";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
export default class CommonProfile extends Component {
  handleChange = () => {
    Actions.push("favourites");
  };
  handleChange1 = () => {
    Actions.push("pay");
  };
  handleChange2 = () => {
    Actions.push("settings");
  };
  render() {
    return (
      <Container>
        <Header style ={styles.hdr}>
          <Left avatar>
            <Thumbnail source={BackgroundImg} style={styles.image} />
          </Left>
          <Body>
            <Title>John Doe</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="heart" />
              </Button>
            </Left>
            <Body>
              <Button
                transparent
                onPress={() => {
                  this.handleChange();
                }}
              >
                <Text style={styles.textStyle}>YOUR FAVOURITES</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="wallet" />
              </Button>
            </Left>
            <Body>
              <Button
                transparent
                onPress={() => {
                  this.handleChange1();
                }}
              >
                <Text style={styles.textStyle}>PAYMENT</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="help" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text style={styles.textStyle}>HELP</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="share" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text style={styles.textStyle}>FREE FOOD</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="star" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text style={styles.textStyle}>PROMOTIONS</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="cart" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text style={styles.textStyle}>DELIVER WITH ROTIAPP</Text>
              </Button>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#C21807" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Button
                transparent
                onPress={() => {
                  this.handleChange2();
                }}
              >
                <Text style={styles.textStyle}>SETTINGS</Text>
              </Button>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    color: "black"
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 15
  },
  hdr:{
    backgroundColor: '#C21807'
  }
});
