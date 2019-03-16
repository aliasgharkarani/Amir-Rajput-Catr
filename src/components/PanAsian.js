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
    Header,
    Segment,
    Button,
    List,
    ListItem,
    Left,
    Right,
    Thumbnail
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'
export default class PanAsian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab1: false,
            tab2: true,
            tab3: false,
            Starters: [],
            MainCourse: [],
            Desserts: [],
            f0: 0,
            f1: 0,
            f2: 0,
            f3: 0,
            f4: 0,
            g0: 0,
            g1: 0,
            g2: 0,
            g3: 0,
            g4: 0,
            g5: 0,
            g6: 0,
            g7: 0,
            g8: 0,
            g9: 0,
            h0: 0,
            h1: 0,
            h2: 0,
            h3: 0,
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
        firebase.database().ref('Pan Asian').once("value").then(success => {
            const product = success.val();
            const array = [];
            const array1 = [];
            const array2 = [];
            var Starters = product.Starters;
            const keys = Object.keys(Starters);
            var MainCourse = product.MainCourse;
            const key1 = Object.keys(MainCourse);
            var Desserts = product.Desserts;
            const key2 = Object.keys(Desserts);
            for (let i = (keys.length - 1); i >= 0; i--) {
                array.push(Starters[keys[i]])
            }
            for (let i = (key1.length - 1); i >= 0; i--) {
                array1.push(MainCourse[key1[i]])
            }
            for (let i = (key2.length - 1); i >= 0; i--) {
                array2.push(Desserts[key2[i]])
            }
            this.setState({
                Starters: array,
                MainCourse: array1,
                Desserts: array2
            });
        })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        return (
            <Container>
                <Header hasSegment style={{ backgroundColor: "none" }}>
                    <Body>
                        <Segment style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }}>
                            <Button style={{ backgroundColor: this.state.tab1 ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} first onPress={() => { this.setState({ tab1: true, tab2: false, tab3: false }) }}><Text style={{ color: "#C21807" }}>Starters</Text></Button>
                            <Button style={{ backgroundColor: this.state.tab2 ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1: false, tab2: true, tab3: false }) }}><Text style={{ color: "#C21807" }}>Main Course</Text></Button>
                            <Button style={{ backgroundColor: this.state.tab3 ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1: false, tab2: false, tab3: true }) }}><Text style={{ color: "#C21807" }}>Desserts</Text></Button>
                        </Segment>
                    </Body>
                </Header>
                <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                    {this.state.tab1 ?
                        <List>
                            {this.state.Starters && this.state.Starters.map((numbers, index) => {
                                return (
                                    <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                        <Left>
                                            <Thumbnail square source={{ uri: numbers.pics }} />
                                        </Left>
                                        <Body style={{ borderBottomWidth: 0 }}>
                                            <Text>{numbers.menuName}</Text>
                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right style={{ borderBottomWidth: 0 }}>
                                            <TextInput
                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
                                                onChangeText={(qty) => this.setState({ ["f" + index]: qty })}
                                                value={this.state["f" + index]}
                                                name={"f" + index}
                                                placeholder="1"
                                                placeholderTextColor="red"
                                                autoCapitalize='none'
                                            />
                                            <Button onPress={() => { this.props.card(numbers, this.state["f" + index]); this.clear("f" + index); }}><Text>ORDER</Text></Button>
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                        : null}
                    {this.state.tab2 ?
                        <List>
                            {this.state.MainCourse && this.state.MainCourse.map((numbers, index) => {
                                return (
                                    <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                        <Left>
                                            <Thumbnail square source={{ uri: numbers.pics }} />
                                        </Left>
                                        <Body style={{ borderBottomWidth: 0 }}>
                                            <Text>{numbers.menuName}</Text>
                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right style={{ borderBottomWidth: 0 }}>
                                            <TextInput
                                                // underlineColorAndroid="white"
                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
                                                onChangeText={(qty) => this.setState({ ["g" + index]: qty })}
                                                value={this.state["g" + index]}
                                                name={"g" + index}
                                                placeholder="1"
                                                placeholderTextColor="red"
                                                autoCapitalize='none'
                                            />
                                            <Button onPress={() => { this.props.card(numbers, this.state["g" + index]); this.clear("g" + index); }}><Text>ORDER</Text></Button>
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                        : null}
                    {this.state.tab3 ?
                        <List>
                            {this.state.Desserts && this.state.Desserts.map((numbers, index) => {
                                return (
                                    <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                        <Left>
                                            <Thumbnail square source={{ uri: numbers.pics }} />
                                        </Left>
                                        <Body style={{ borderBottomWidth: 0 }}>
                                            <Text>{numbers.menuName}</Text>
                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right style={{ borderBottomWidth: 0 }}>
                                            <TextInput
                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
                                                onChangeText={(qty) => this.setState({ ["h" + index]: qty })}
                                                value={this.state["h" + index]}
                                                name={"h" + index}
                                                placeholder="1"
                                                placeholderTextColor="red"
                                                autoCapitalize='none'
                                            />
                                            <Button onPress={() => { this.props.card(numbers, this.state["h" + index]); this.clear("h" + index); }}><Text>ORDER</Text></Button>
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                        : null}
                </Content>
            </Container>)
    }
}