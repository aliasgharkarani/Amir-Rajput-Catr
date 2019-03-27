import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TextInput,
    StyleSheet,
    Image
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
const { width, height, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'
import SwiperFlatList from 'react-native-swiper-flatlist';
export default class Lunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    // clear = (abc) => {
    //     this.setState({
    //         qty: "",
    //         [abc]: 0
    //     })
    // }
    render() {
        return (
            <Container>
                <Content padder>
                    <View style={styles.container}>
                        <SwiperFlatList
                            autoplay
                            autoplayDelay={5}
                            autoplayLoop
                            index={2}
                            showPagination
                        >
                            <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                                <Image source={require('../assets/menu3.jpeg')} style={{ height: 200, width: null, flex: 1 }} />
                            </View>
                            <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                                <Image source={require('../assets/menu2.jpeg')} style={{ height: 200, width: null, flex: 1 }} />
                            </View>
                            <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                                <Image source={require('../assets/menu4.jpeg')} style={{ height: 200, width: null, flex: 1 }} />
                            </View>
                            <View style={[styles.child, { backgroundColor: 'teal' }]}>
                                <Image source={require('../assets/menu1.jpeg')} style={{ height: 200, width: null, flex: 1 }} />
                            </View>
                        </SwiperFlatList>
                    </View>

                    <Card>
                        <CardItem header bordered>
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }} onPress={() => this.props.navigation1.navigate('lunch1')}>
                                <Text style={{fontFamily:"AguafinaScript-Regular !important",fontSize:18}}>Lunch</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ lunchOpen: !this.state.lunchOpen })}> */}
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.props.navigation1.navigate('lunch1')}>

                                {this.state.lunchOpen ?
                                    <Text style={{ fontSize: 30 }}>-</Text>
                                    :
                                    <Text style={{ fontSize: 25 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>
                        {/* 
                        {this.state.lunchOpen ?
                            <CardItem bordered>
                                <ScrollView>
                                    {
                                        this.state.Lunch.map((mu, index) => {
                                            return (
                                                <Card style={{ backgroundColor: "green", margin: 0, padding: 0 }}>
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
                        } */}
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 12}} onPress={() => this.props.navigation1.navigate('hightea')}>
                                <Text style={{fontFamily:"AguafinaScript-Regular !important",fontSize:18}}>High Tea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.props.navigation1.navigate('hightea')}>
                                {this.state.HightTeaOpen ?
                                    <Text style={{ fontSize: 30 }}>-</Text>
                                    :
                                    <Text style={{ fontSize: 25 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>
                        {/* 
                        {this.state.HightTeaOpen ?
                            <CardItem bordered>
                                <ScrollView>
                                    {
                                        this.state.HightTea.map((mu, index) => {
                                            return (
                                                <Card style={{ backgroundColor: "green", margin: 0, padding: 0 }}>
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
                        } */}
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
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }} onPress={() => this.props.navigation1.navigate('dinner')}>
                                <Text style={{fontFamily: "AguafinaScript-Regular !important",fontSize:18}}>Dinner</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ DinnerOpen: !this.state.DinnerOpen })} onPress={() => this.props.navigation1.navigate('dinner')}>
                                {this.state.DinnerOpen ?
                                    <Text style={{ fontSize: 30 }}>-</Text>
                                    :
                                    <Text style={{ fontSize: 25 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>
                        {/* 
                        {this.state.DinnerOpen ?
                            <CardItem bordered>
                                <ScrollView>
                                    {
                                        this.state.Dinner.map((mu, index) => {
                                            return (
                                                <Card style={{ backgroundColor: "green", margin: 0, padding: 0 }}>
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
                            : null */}
                        {/* } */}
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
                            <TouchableOpacity style={{ width: width / 1.5, height: width / 15 }} onPress={() => this.props.navigation1.navigate('menu')}>
                                <Text style={{fontFamily: "AguafinaScript-Regular !important",fontSize:18}}>Menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: width / 4, height: width / 11, display: "flex", flexDirection: "row", justifyContent: "center" }} onPress={() => this.setState({ DinnerOpen: !this.state.DinnerOpen })} onPress={() => this.props.navigation1.navigate('menu')}>
                                {this.state.DinnerOpen ?
                                    <Text style={{ fontSize: 30 }}>-</Text>
                                    :
                                    <Text style={{ fontSize: 25 }}>+</Text>
                                }
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    child: {
        height: height * 0.3,
        width,
        justifyContent: 'center',
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center',
    },
});