import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TextInput
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Button,
    Spinner
} from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class Lunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Lunch: [],
            l0: false,
            l1: false,
            l2: false,
            lunchOpen:false,
            HightTea: [],
            h0: false,
            h1: false,
            h2: false,
            HightTeaOpen:false,
            Dinner:[],
            d0: false,
            d1: false,
            d2: false,
            DinnerOpen:false,
            f0: 1,
            f1: 1,
            f2: 1,
            qty: 1,
        }
    }
    clear = (abc) => {
        this.setState({
            qty: "",
            [abc]: 0
        })
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
            
        firebase.database().ref('HighTea').once("value").then(success => {
            const product1 = success.val();
            const keys1 = Object.keys(product1);
            const array1 = [];
            for (let i = (keys1.length - 1); i >= 0; i--) {
                array1.push(product1[keys1[i]])
            }
            this.setState({ HightTea: array1 });
        })
            .catch(err => {
                alert(err)
            })
            
        firebase.database().ref('Dinner').once("value").then(success => {
            const product2 = success.val();
            const keys2 = Object.keys(product2);
            const array2 = [];
            for (let i = (keys2.length - 1); i >= 0; i--) {
                array2.push(product2[keys2[i]])
            }
            this.setState({ Dinner: array2 });
        })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }}>
                                <Text>Lunch</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ lunchOpen: !this.state.lunchOpen })}>
                                {this.state.lunchOpen?
                                        <Text style={{ fontSize: 30 }}>-</Text>
                                        :
                                        <Text style={{ fontSize: 30 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>

                        {this.state.lunchOpen?
                            <CardItem bordered>
                            <ScrollView>
                                {
                                    this.state.Lunch.map((mu, index) => {
                                        return (
                                           <Card style={{backgroundColor:"green",margin:0,padding:0}}>
                                                <CardItem header bordered>
                                                    <TouchableOpacity style={{ width: width / 1.8, height: width / 15 }}>
                                                        <Text>{mu.menuName}</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: width / 4, height: width / 14, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ ["l" + index]: !this.state["l" + index] })}>
                                                        {
                                                            this.state["l" + index] ?
                                                                <Text style={{ fontSize: 25 }}>-</Text>
                                                                :
                                                                <Text style={{ fontSize: 25 }}>+</Text>
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
                                                    <Text style={{ width: width / 2.7 }}>{mu.price} / Person</Text>
                                                    <TextInput
                                                        style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 6, color: "red", fontSize: 19, display: "flex", flexDirection: "row", textAlign: "center" }}
                                                        onChangeText={(qty) => this.setState({ ["f" + index]: qty })}
                                                        value={this.state["f" + index]}
                                                        name={"f" + index}
                                                        placeholder="1"
                                                        placeholderTextColor="red"
                                                        autoCapitalize='none'
                                                    />
                                                    <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                 }
                                 </ScrollView>
                            </CardItem>
                            : null
                        }
                        {/* <CardItem footer bordered>
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
                            <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                        </CardItem> */}
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }}>
                                <Text>High Tea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ HightTeaOpen: !this.state.HightTeaOpen })}>
                                {this.state.HightTeaOpen?
                                        <Text style={{ fontSize: 30 }}>-</Text>
                                        :
                                        <Text style={{ fontSize: 30 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>

                        {this.state.HightTeaOpen?
                            <CardItem bordered>
                            <ScrollView>
                                {
                                    this.state.HightTea.map((mu, index) => {
                                        return (
                                           <Card style={{backgroundColor:"green",margin:0,padding:0}}>
                                                <CardItem header bordered>
                                                    <TouchableOpacity style={{ width: width / 1.8, height: width / 15 }}>
                                                        <Text>{mu.menuName}</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: width / 4, height: width / 14, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ ["h" + index]: !this.state["h" + index] })}>
                                                        {
                                                            this.state["h" + index] ?
                                                                <Text style={{ fontSize: 25 }}>-</Text>
                                                                :
                                                                <Text style={{ fontSize: 25 }}>+</Text>
                                                        }
                                                    </TouchableOpacity>
                                                </CardItem>

                                                {this.state["h" + index] ?
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
                                                    <Text style={{ width: width / 2.7 }}>{mu.price} / Person</Text>
                                                    <TextInput
                                                        style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 6, color: "red", fontSize: 19, display: "flex", flexDirection: "row", textAlign: "center" }}
                                                        onChangeText={(qty) => this.setState({ ["f" + index]: qty })}
                                                        value={this.state["f" + index]}
                                                        name={"f" + index}
                                                        placeholder="1"
                                                        placeholderTextColor="red"
                                                        autoCapitalize='none'
                                                    />
                                                    <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                 }
                                 </ScrollView>
                            </CardItem>
                            : null
                        }
                        {/* <CardItem footer bordered>
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
                            <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                        </CardItem> */}
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }}>
                                <Text>Dinner</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ DinnerOpen: !this.state.DinnerOpen })}>
                                {this.state.DinnerOpen?
                                        <Text style={{ fontSize: 30 }}>-</Text>
                                        :
                                        <Text style={{ fontSize: 30 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>

                        {this.state.DinnerOpen?
                            <CardItem bordered>
                            <ScrollView>
                                {
                                    this.state.Dinner.map((mu, index) => {
                                        return (
                                           <Card style={{backgroundColor:"green",margin:0,padding:0}}>
                                                <CardItem header bordered>
                                                    <TouchableOpacity style={{ width: width / 1.8, height: width / 15 }}>
                                                        <Text>{mu.menuName}</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: width / 4, height: width / 14, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ ["d" + index]: !this.state["d" + index] })}>
                                                        {
                                                            this.state["d" + index] ?
                                                                <Text style={{ fontSize: 25 }}>-</Text>
                                                                :
                                                                <Text style={{ fontSize: 25 }}>+</Text>
                                                        }
                                                    </TouchableOpacity>
                                                </CardItem>

                                                {this.state["d" + index] ?
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
                                                    <Text style={{ width: width / 2.7 }}>{mu.price} / Person</Text>
                                                    <TextInput
                                                        style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 6, color: "red", fontSize: 19, display: "flex", flexDirection: "row", textAlign: "center" }}
                                                        onChangeText={(qty) => this.setState({ ["f" + index]: qty })}
                                                        value={this.state["f" + index]}
                                                        name={"f" + index}
                                                        placeholder="1"
                                                        placeholderTextColor="red"
                                                        autoCapitalize='none'
                                                    />
                                                    <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                 }
                                 </ScrollView>
                            </CardItem>
                            : null
                        }
                        {/* <CardItem footer bordered>
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
                            <Button style={{ alignSelf: "center" }} onPress={() => { this.props.card(mu, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                        </CardItem> */}
                    </Card>
                </Content>
            </Container>
        )
    }
}