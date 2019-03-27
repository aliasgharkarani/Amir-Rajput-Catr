import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    TextInput
} from 'react-native'
import {
    Text,
    Card,
    CardItem,
    Body,
    Button,
    Container,
    Content,
    Header,
    Right,
    Left,
    Icon,
    Title
} from 'native-base';
const { width, fontScale, height } = Dimensions.get('window');
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
class Menus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Menus: [],
            open: false,
            a3: 0,
            a2: 0,
            a1: 0,
            a0: 0,
            qty: 1
        }
    }
    UNSAFE_componentWillMount() {
        firebase.database().ref('Menus').once("value").then(success => {
            const product = success.val();
            const keys = Object.keys(product);
            const array = [];
            for (let i = (keys.length - 1); i >= 0; i--) {
                array.push(product[keys[i]])
            }
            this.setState({ Menus: array });
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
                        <Title>Menus</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            {/* <Text>Cancel</Text> */}
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <View>
                        <ScrollView>
                            {this.state.Menus && this.state.Menus.map((mu, index) => {
                                return (
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={{ uri: mu.pics }} style={{ height: 200, width: null, flex: 1 }} />
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Text style={styles.cardHeading}>{mu.menuName}</Text>
                                                <View style={{ width: width / 1.1 }}>
                                                    {
                                                        mu.items.map((numbers) => {
                                                            return (
                                                                <Text style={styles.cardText}>{numbers}</Text>
                                                            )
                                                        })
                                                    }
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", width: width / 1.25, justifyContent: "space-between" }}>
                                                    <Text style={styles.cardTime}>Rs.{mu.price}</Text>
                                                    <TextInput
                                                        style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 13, color: "red", backgroundColor: "none", fontSize: 19 }}
                                                        onChangeText={(qty) => this.setState({ ["a" + index]: qty })}
                                                        value={this.state["a" + index]}
                                                        name={"a" + index}
                                                        placeholder="1"
                                                        placeholderTextColor="red"
                                                        autoCapitalize='none'
                                                        keyboardType="numeric"
                                                    />
                                                    <Button onPress={() => { this.props.AddOrder(mu, this.state["a" + index]); this.clear("a" + index); }}><Text>ORDER</Text></Button>
                                                </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: height / 1.2,
    },
    heading: {
        fontSize: 20,
        color: 'white'
    },
    cardHeading: {
        fontSize: 22
    },
    cardText: {
        // fontSize: 17,
        color: 'grey',
        width: width / 1.9,
        fontFamily: "Roboto-MediumItalic"
    },
    cardTime: {
        backgroundColor: 'lightgrey',
        fontSize: 18,
        alignSelf: "center"
    },
    hdr: {
        backgroundColor: "#C21807",
        alignItems: "center"
    },
    container1: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch"
    },
    iconSearch1: {
        padding: 5
    },
    txt: {
        fontSize: 20,
    },
    hdr: {
        backgroundColor: '#C21807',
        alignItems: 'center',
    },
    bgImage1: {
        marginTop: 5,
        flex: 1,
        width: width,
        height: height / 3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        resizeMode: "cover",
        position: "relative",
        opacity: 0.5
    },
    catName: {
        fontSize: 40,
        color: "white",
        padding: 10,
        position: "absolute",
        top: 150,
        left: 130
    },
    textStyle1: {
        color: "black"
    },
    image1: {
        width: 35,
        height: 35,
        borderRadius: 15
    },
    hdr1: {
        backgroundColor: '#C21807'
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        AddOrder: (OrdrD, qty) => { dispatch({ type: 'ADD_TODO', OrderDetails: OrdrD, Quantity: qty }) }
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menus)