import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    BackHandler,
    Dimensions,
    defaultProps,
    Image,
    AppRegistry,
    ScrollView
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Left,
    Body,
    Thumbnail,
    Header,
    Icon,
    Right,
    List,
    ListItem,
    Separator,
    Title,
    Button,
    Item,
    Input,
    Segment
} from 'native-base';
import CardImage from './img.jpeg'
// import { ScrollView } from 'react-native-gesture-handler';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
var Menus = [
    { menuName: "Menu 01", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH LAHORI", "CHICKEN RESHMI KABAB", "MUTTON KUNNA", "CHICKEN BIRYANI", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GULAB JAMAN", "CREAM CARAMEL"],"price":"10,000" },
    { menuName: "Menu 02", items: ["FRESH JUICES ON ARRIVAL", "CHAPLI / SEEKH KABAB", "CHICKEN MALAI BOTI", "CHICKEN ZAFRANI BIRYANI", "CHICKEN BADAMI QORMA", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GAJAR KA HALWA", "FRUIT TRIFFLE"],"price":"15,000"},
    { menuName: "Menu 03", items: ["FRESH JUICES ON ARRIVAL", "GRILLED FISH", "CHICKEN BIHARI BOTI", "CHICKEN KARAHI", "MUTTON YAKHNI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "RABRI KHEER", "LAB-E-SHEEREN"],"price":"20,000"},
    { menuName: "Menu 04", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH ORLY", "CHICKEN STEAM", "CHICKEN PESHAWARI KARAHI", "KASHMIRI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "SPECIAL ZARDA", "DOODH DULARI"],"price":"25,000"}
]
export default class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: true
        }
    }
    render() {
        switch (this.props.ScrnChng) {
            case 0:
                return (
                    <View>
                        <Header style={styles.hdr}>
                            <Title style={styles.txt}>Traditional Set Menus</Title>
                        </Header>
                        <View>
                            <ScrollView style={{ marginBottom: '10%' }}>
                                {
                                    Menus.map((mu, index) => {
                                        return (
                                            <Card>
                                                <CardItem cardBody>
                                                    <Image source={CardImage} style={{ height: 200, width: null, flex: 1 }} />
                                                </CardItem>
                                                <CardItem>
                                                    <Body>
                                                        <Text style={styles.cardHeading}>{mu.menuName}</Text>
                                                        <View style={{ width: width / 1.1}}>
                                                            {
                                                                mu.items.map((numbers) => {
                                                                    return (
                                                                        <Text style={styles.cardText}>{numbers}</Text>
                                                                    )
                                                                })
                                                            }
                                                        </View>
                                                        <Text style={styles.cardTime}>Rs.{mu.price}</Text>
                                                        <Button><Text>Add to Card</Text></Button>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                    // </Container>
                )
                break;
            case 1:
                return (
                    <Container>
                        <Header style={styles.hdr}>
                            <Title style={styles.txt}>Search</Title>
                        </Header>
                        <Content>
                            <View style={styles.container1}>
                                <Item>
                                    <Icon name="ios-search" style={styles.iconSearch1} />
                                    <Input placeholder="Search for restaurant or dish" />
                                </Item>
                            </View>
                            <Image style={styles.bgImage1} source={CardImage} />
                            <Text style={styles.catName1}>Dinner</Text>
                        </Content>
                    </Container>
                )
                break;
            case 2:
                return (
                    <Container>
                        <Header hasSegment style={{ backgroundColor: "#C21807" }}>
                            <Left>
                                <Button transparent>
                                    <Icon name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                                <Segment style={{ backgroundColor: "#C21807" }}>
                                    <Button first onPress={() => { this.setState({ tab: true }) }}><Text>Past Orders</Text></Button>
                                    <Button last active onPress={() => { this.setState({ tab: false }) }}><Text>Upcomming Orders</Text></Button>
                                </Segment>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon name="search" />
                                </Button>
                            </Right>
                        </Header>
                        <Content padder>
                            {this.state.tab ?
                                <Text>Awesome segment-1</Text>
                                :
                                <Text>Awesome segment-2</Text>
                            }
                        </Content>
                    </Container>
                )
                break;
            case 3:
                return (
                    <Container>
                        <Header style={styles.hdr1}>
                            <Left avatar>
                                <Thumbnail source={CardImage} style={styles.image1} />
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
                                        <Text style={styles.textStyle1}>YOUR FAVOURITES</Text>
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
                                        <Text style={styles.textStyle1}>PAYMENT</Text>
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
                                        <Text style={styles.textStyle1}>HELP</Text>
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
                                        <Text style={styles.textStyle1}>FREE FOOD</Text>
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
                                        <Text style={styles.textStyle1}>PROMOTIONS</Text>
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
                                        <Text style={styles.textStyle1}>DELIVER WITH ROTIAPP</Text>
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
                                        <Text style={styles.textStyle1}>SETTINGS</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        </Content>
                    </Container>
                )
                break;
            default:
                return (
                    <Text>Default</Text>
                )
        }
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
        fontSize: 17,
        color: 'grey',
        width: width / 1.9,
        // display: "flex",
        // flexDirection: "row",
        // textAlign:"center"
        // backgroundColor: "red",
        // borderColor: "blue",
        // borderWidth: 1

    },
    cardTime: {
        backgroundColor: 'lightgrey',
        fontSize: 18,
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