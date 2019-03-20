import React, { Component } from "react";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {
    View,
    Dimensions,
    TextInput,
    StyleSheet,
    Image
} from 'react-native'
import firebase from 'react-native-firebase'
const { width, height, fontScale } = Dimensions.get('window');
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";
import { connect } from 'react-redux'
class lunch1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Lunch: [],
            l0: false,
            l1: false,
            l2: false,
            f0: 1,
            f1: 1,
            f2: 1,
            lunchOpen: false,
            qty: 1,
        }
    }
    UNSAFE_componentWillMount() {
        firebase.database().ref('Lunch').once("value").then(success => {
            const product = success.val();
            const keys = Object.keys(product);
            const array = [];
            for (let i = (keys.length - 1); i >= 0; i--) {
                array.push(product[keys[i]])
            }
            this.setState({ Lunch: array });
        })
            .catch(err => {
                alert(err)
            })
    }
    clear = (abc) => {
        this.setState({
            qty: "",
            [abc]: 0
        })
    }
    render() {
        return (
            <Container style={{ backgroundColor: "#87cefa" }}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Lunch</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            {/* <Text>Cancel</Text> */}
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    {
                        this.state.Lunch.map((mu, index) => {
                            return (
                                <Card style={{ backgroundColor: "none", margin: 0, padding: 0 }}>
                                    <CardItem header bordered>
                                        <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }}>
                                            <Text>{mu.menuName}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ ["l" + index]: !this.state["l" + index] })}>
                                            {
                                                this.state["l" + index] ?
                                                    <Text style={{ fontSize: 30 }}>-</Text>
                                                    :
                                                    <Text style={{ fontSize: 30 }}>+</Text>
                                            }
                                        </TouchableOpacity>
                                    </CardItem>

                                    {this.state["l" + index] ?
                                        <CardItem bordered>
                                            <Body>
                                                <View>
                                                    {
                                                        mu.items.map((numbers) => {
                                                            return (
                                                                <Text style={{ fontFamily: "AguafinaScript-Regular" }}>
                                                                    {numbers}
                                                                </Text>
                                                            )
                                                        })
                                                    }
                                                </View>
                                            </Body>
                                        </CardItem>
                                        : null
                                    }
                                    <CardItem footer bordered>
                                        <Text style={{ width: width / 2.2 }}>{mu.price} / Person</Text>
                                        <TextInput
                                            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 6, color: "red", fontSize: 19, display: "flex", flexDirection: "row", textAlign: "center" }}
                                            onChangeText={(qty) => this.setState({ ["f" + index]: qty })}
                                            value={this.state["f" + index]}
                                            name={"f" + index}
                                            placeholder="1"
                                            placeholderTextColor="red"
                                            autoCapitalize='none'
                                        />
                                        <Button style={{ alignSelf: "center" }} onPress={() => { this.props.AddOrder(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddOrder: (OrdrD, qty) => { dispatch({ type: 'ADD_TODO', OrderDetails: OrdrD, Quantity: qty }) }
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(lunch1)