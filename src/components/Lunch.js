import React, { Component } from 'react';
import {
    View,
    Dimensions,
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Body,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class Lunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Lunch: [],
            open:false
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
            // console.log(array);
            this.setState({ Lunch: array });
        })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        return (
            <Container>
                <Content padder>
                    {
                        this.state.Lunch.map((mu, index) => {
                            return (
                                <Card>
                                    <CardItem header bordered>
                                        <TouchableOpacity style={{ width: width / 1.2, height: width / 15 }} onPress={() => this.setState({ open: !this.state.open })}>
                                            <Text>{mu.menuName}</Text>
                                        </TouchableOpacity>
                                    </CardItem>

                                    {
                                        this.state.open ?
                                            <CardItem bordered>
                                                <Body>
                                                    <View>
                                                        {
                                                            mu.items.map((numbers) => {
                                                                return (
                                                                    <Text>
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
                                        <Text>{mu.Price}/- Per Person</Text>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>

        )
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//         alignItems: 'stretch',
//         height: height / 1.2,
//     },
//     heading: {
//         fontSize: 20,
//         color: 'white'
//     },
//     cardHeading: {
//         fontSize: 22
//     },
//     cardText: {
//         fontSize: 17,
//         color: 'grey',
//         width: width / 1.9,
//         fontFamily: "monospace"
//     },
//     cardTime: {
//         backgroundColor: 'lightgrey',
//         fontSize: 18,
//         alignSelf: "center"
//     },
//     hdr: {
//         backgroundColor: "#C21807",
//         alignItems: "center"
//     },
//     container1: {
//         flex: 1,
//         justifyContent: "space-between",
//         alignItems: "stretch"
//     },
//     iconSearch1: {
//         padding: 5
//     },
//     txt: {
//         fontSize: 20,
//     },
//     hdr: {
//         backgroundColor: '#C21807',
//         alignItems: 'center',
//     },
//     bgImage1: {
//         marginTop: 5,
//         flex: 1,
//         width: width,
//         height: height / 3,
//         justifyContent: "flex-end",
//         alignItems: "flex-end",
//         resizeMode: "cover",
//         position: "relative",
//         opacity: 0.5
//     },
//     catName: {
//         fontSize: 40,
//         color: "white",
//         padding: 10,
//         position: "absolute",
//         top: 150,
//         left: 130
//     },
//     textStyle1: {
//         color: "black"
//     },
//     image1: {
//         width: 35,
//         height: 35,
//         borderRadius: 15
//     },
//     hdr1: {
//         backgroundColor: '#C21807'
//     }
// });