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
    Thumbnail,
    Spinner
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'
export default class RoyalMughlai extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab1b: false,
            tab2b: true,
            tab3b: false,
            tab4b: false,
            Starters: [],
            MainCourse: [],
            Desserts: [],
            Breads: [],
            qty: 1,
            b0: 0,
            b1: 0,
            b2: 0,
            b3: 0,
            b4: 0,
            c0: 0,
            c1: 0,
            c2: 0,
            c3: 0,
            c4: 0,
            c5: 0,
            c6: 0,
            c7: 0,
            c8: 0,
            d0: 0,
            d1: 0,
            d2: 0,
            d3: 0,
            d4: 0,
            e0: 0,
            e1: 0,
            e2: 0,
        }
    }
    clear = (abc) => {
        this.setState({
            qty: "",
            [abc]: 0
        })
    }
    UNSAFE_componentWillMount() {
        firebase.database().ref('Royal Mughlai').once("value").then(success => {
            const product = success.val();
            const array = [];
            const array1 = [];
            const array2 = [];
            const array3 = [];
            var Starters = product.Starters;
            const keys = Object.keys(Starters);
            var MainCourse = product.MainCourse;
            const key1 = Object.keys(MainCourse);
            var Desserts = product.Desserts;
            const key2 = Object.keys(Desserts);
            var Breads = product.Breads;
            const key3 = Object.keys(Breads);
            for (let i = (keys.length - 1); i >= 0; i--) {
                array.push(Starters[keys[i]])
            }
            for (let i = (key1.length - 1); i >= 0; i--) {
                array1.push(MainCourse[key1[i]])
            }
            for (let i = (key2.length - 1); i >= 0; i--) {
                array2.push(Desserts[key2[i]])
            }
            for (let i = (key3.length - 1); i >= 0; i--) {
                array3.push(Breads[key3[i]])
            }
            this.setState({
                Starters: array,
                MainCourse: array1,
                Desserts: array2,
                Breads: array3
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
                            <Button style={{ backgroundColor: this.state.tab1b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} first onPress={() => { this.setState({ tab1b: true, tab2b: false, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Starters</Text></Button>
                            <Button style={{ backgroundColor: this.state.tab2b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: true, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Main Course</Text></Button>
                            <Button style={{ backgroundColor: this.state.tab3b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: false, tab3b: true, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Desserts</Text></Button>
                        </Segment>
                    </Body>
                </Header>
                <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                    {this.state.tab1b ?
                        <List>
                            {this.state.Starters.length &&
                                this.state.Starters.map((numbers, index) => {
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
                                                    style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 4.7,display:"flex",flexDirection:"row",textAlign:"center", color: "red", backgroundColor: "none", fontSize: 19}}
                                                    onChangeText={(qty) => this.setState({ ["b" + index]: qty })}
                                                    value={this.state["b" + index]}
                                                    name={"b" + index}
                                                    placeholder="1"
                                                    placeholderTextColor="red"
                                                    autoCapitalize='none'
                                                />
                                                <Button onPress={() => { this.props.card(numbers, this.state["b" + index]); this.clear("b" + index); }}><Text>ORDER</Text></Button>
                                            </Right>
                                        </ListItem>
                                    )
                                })}
                        </List>
                        : null}
                    {this.state.tab2b ?
                        <View>
                            <List>
                                {this.state.MainCourse.length ?
                                    this.state.MainCourse.map((numbers, index) => {
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
                                                       style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 4.7,display:"flex",flexDirection:"row",textAlign:"center", color: "red", backgroundColor: "none", fontSize: 19}}
                                                       onChangeText={(qty) => this.setState({ ["c" + index]: qty })}
                                                        value={this.state["c" + index]}
                                                        name={"c" + index}
                                                        placeholder="1"
                                                        placeholderTextColor="red"
                                                        autoCapitalize='none'
                                                    />
                                                    <Button onPress={() => { this.props.card(numbers, this.state["c" + index]); this.clear("c" + index); }}><Text>ORDER</Text></Button>
                                                </Right>
                                            </ListItem>
                                        )
                                    }) :
                                    <Spinner color='blue' />
                                }
                            </List>
                            <List>
                                {this.state.Breads.length ? <Text style={{ textAlign: "center", fontSize: 23, fontWeight: "bold" }}>Breads</Text> : null}
                                {this.state.Breads && this.state.Breads.map((numbers, index) => {
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
                                                    style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 4.7,display:"flex",flexDirection:"row",textAlign:"center", color: "red", backgroundColor: "none", fontSize: 19}}                                                    
                                                    onChangeText={(qty) => this.setState({ ["d" + index]: qty })}
                                                    value={this.state["d" + index]}
                                                    name={"d" + index}
                                                    placeholder="1"
                                                    placeholderTextColor="red"
                                                    autoCapitalize='none'
                                                />
                                                <Button onPress={() => { this.props.card(numbers, this.state["d" + index]); this.clear("d" + index); }}><Text>ORDER</Text></Button>
                                            </Right>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </View>
                        : null}
                    {this.state.tab3b ?
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
                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 4.7,display:"flex",flexDirection:"row",textAlign:"center", color: "red", backgroundColor: "none", fontSize: 19}}                                                
                                                onChangeText={(qty) => this.setState({ ["e" + index]: qty })}
                                                value={this.state["e" + index]}
                                                name={"e" + index}
                                                placeholder="1"
                                                placeholderTextColor="red"
                                                autoCapitalize='none'
                                            />
                                            <Button onPress={() => { this.props.card(numbers, this.state["e" + index]); this.clear("e" + index); }}><Text>ORDER</Text></Button>
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                        : null}
                </Content>
            </Container>
        )
    }
}