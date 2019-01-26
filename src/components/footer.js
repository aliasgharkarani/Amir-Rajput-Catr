import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class CommonFooter extends Component {
  render() {
    const { activeTab } = this.props;

    return (
      <Footer>
        <FooterTab style={styles.ftr}>
          <Button
          style={ activeTab == 1 ? { backgroundColor: "#dd1a08"} : { backgroundColor: "#C21807"} }
            vertical
            active={activeTab == 1}
            onPress={() => {
              this.props.TabsClick(1);
            }}
          >
            <Icon style={styles.ic} name="home" />
            <Text style={styles.txt}>Home</Text>
          </Button>
          <Button
          style={ activeTab == 2 ? { backgroundColor: "#dd1a08"} :  { backgroundColor: "#C21807"} }
            active={activeTab == 2}
            vertical
            onPress={() => {
              this.props.TabsClick(2);
            }}
          >
            <Icon style={styles.ic} active name="search" />
            <Text style={styles.txt}>Search</Text>
          </Button>
          <Button
          style={ activeTab == 3 ? { backgroundColor: "#dd1a08"} : { backgroundColor: "#C21807"}  }
            vertical
            active={activeTab == 3}
            onPress={() => {
              this.props.TabsClick(3);
            }}
          >
            <Icon style={styles.ic} name="paper" />
            <Text style={styles.txt}>History</Text>
          </Button>

          <Button
            style={ activeTab == 4 ? { backgroundColor: "#dd1a08"} : { backgroundColor: "#C21807"}  }
            active={activeTab == 4}
            vertical
            onPress={() => {
              this.props.TabsClick(4);
            }}
          >
            <Icon style={styles.ic} name="person" />
            <Text style={styles.txt}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = StyleSheet.create({
  ftr: {
    backgroundColor: "#C21807"
  },
  ic:{
    backgroundColor:'#C21807',
    color:'white'
  },
  txt:{
    color:'white'
  }
});