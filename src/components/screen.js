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
    Segment,
    Accordion
} from 'native-base';
import CardImage from './img.jpeg'
// import { ScrollView } from 'react-native-gesture-handler';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
var Menus = [
    { menuName: "Menu 01", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH LAHORI", "CHICKEN RESHMI KABAB", "MUTTON KUNNA", "CHICKEN BIRYANI", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GULAB JAMAN", "CREAM CARAMEL"], "price": "10,000" },
    { menuName: "Menu 02", items: ["FRESH JUICES ON ARRIVAL", "CHAPLI / SEEKH KABAB", "CHICKEN MALAI BOTI", "CHICKEN ZAFRANI BIRYANI", "CHICKEN BADAMI QORMA", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GAJAR KA HALWA", "FRUIT TRIFFLE"], "price": "15,000" },
    { menuName: "Menu 03", items: ["FRESH JUICES ON ARRIVAL", "GRILLED FISH", "CHICKEN BIHARI BOTI", "CHICKEN KARAHI", "MUTTON YAKHNI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "RABRI KHEER", "LAB-E-SHEEREN"], "price": "20,000" },
    { menuName: "Menu 04", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH ORLY", "CHICKEN STEAM", "CHICKEN PESHAWARI KARAHI", "KASHMIRI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "SPECIAL ZARDA", "DOODH DULARI"], "price": "25,000" }
]
const dataArray = [
    { title: "Prawn Tempura", content: "one" },
    { title: "Chicken Satay", content: "two" },
    { title: "Crispy Spring Rolls", content: "three" },
    { title: "Tom Yum Soup", content: "three" },
    { title: "Hot & Sour Soup", content: "three" }
];
const dataArray1 = [
    { title: "Teppanyaki Grill Live", content: "one" },
    { title: "Chicken- Beef- Prawn- Fish", content: "two" },
    { title: "Sauces: Chili- Thai Red & Green Curry- Garlic", content: "three" },
    { title: "Teriyaki Grill Live", content: "three" },
    { title: "Chicken- Beef", content: "three" },
    { title: "Sauce: Teriyaki", content: "three" },
    { title: "Tiger Prawns", content: "three" },
    { title: "Thai Green Curry", content: "three" },
    { title: "Lemongrass Chicken", content: "three" },
    { title: "Black Pepper Beef", content: "three" },
];
const dataArray2 = [
    { title: "Summer Breeze", content: "one" },
    { title: "Ice Cream with Espresso or Chocolate Syrup", content: "two" },
    { title: "Mango- Coconut Ice Creams", content: "three" },
    { title: "Fresh Tropical Fruits", content: "three" }
];
const dataArray1a = [
    { title: "Murgh Tikka Lahori", content: "one" },
    { title: "Chapli Kabab Peshawari", content: "two" },
    { title: "Kabuli Chaanp", content: "three" },
    { title: "Butterfly Jhinga", content: "three" },
    { title: "Machi Anarkali", content: "three" }
];
const dataArray2a = [
    { title: "Chicken Makhni", content: "one" },
    { title: "Lamb Zafarani Korma", content: "two" },
    { title: "Tawa Chicken", content: "three" },
    { title: "Sag Gosht", content: "three" },
    { title: "Tarka Dall", content: "three" },
    { title: "Dal Makhni", content: "three" },
    { title: "Sag GoshtAloo ki Tarkari", content: "three" },
    { title: "Zafrani Biryani", content: "three" },
    { title: "Sag GoshtAloo ki Tarkari", content: "three" },
    { title: "Afghani Pulao", content: "three" }
];
const dataArray3a = [
    { title: "Tandoori Naan", content: "one" },
    { title: "Garlic Naan", content: "two" },
    { title: "Sheermall", content: "three" },
    { title: "Taftan", content: "three" },
    { title: "Tandoori Roti", content: "three" }
];
const dataArray4a = [
    { title: "Shahi Tukra", content: "one" },
    { title: "Shahi Kheer", content: "two" },
    { title: "Daal ka Halwa", content: "three" }
];
// var Starters = ["Prawn Tempura", "Chicken Satay", "Crispy Spring Rolls", "Tom Yum Soup", "Hot & Sour Soup"]
// var MainCourse = ["Teppanyaki Grill Live", "Chicken- Beef- Prawn- Fish", "Sauces: Chili- Thai Red & Green Curry- Garlic", "Teriyaki Grill Live", "Chicken- Beef", "Sauce: Teriyaki", "Tiger Prawns", "Thai Green Curry", "Lemongrass Chicken", "Black Pepper Beef"]
// var Desserts = ["Summer Breeze", "Ice Cream with Espresso or Chocolate Syrup", "Mango- Coconut Ice Creams", "Fresh Tropical Fruits"]
export default class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            tab1b: true,
            tab2b: false,
            tab3b: false,
            tab4b: false,
        }
    }
    render() {
        switch (this.props.ScrnChng) {
            case 0:
                return (
                    <View>
                        <View>
                            <ScrollView>
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
                                                        <View style={{ width: width / 1.1 }}>
                                                            {
                                                                mu.items.map((numbers) => {
                                                                    return (
                                                                        <Text style={styles.cardText}>{numbers}</Text>
                                                                    )
                                                                })
                                                            }
                                                        </View>
                                                        <View style={{ display: "flex", flexDirection: "row", width: width / 1.1, justifyContent: "space-between" }}>
                                                            <Text style={styles.cardTime}>Rs.{mu.price}</Text>
                                                            <Button onPress={() => { this.props.Card(1) }}><Text>Add to Card</Text></Button>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                )
                break;
            case 1:
                return (
                    <Container>
                        <Header hasSegment style={{ backgroundColor: "none" }}>
                            <Body>
                                <Segment style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }}>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} first onPress={() => { this.setState({ tab1b: true, tab2b: false, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Starters</Text></Button>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: true, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Main Course</Text></Button>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: false, tab3b: true, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Desserts</Text></Button>
                                    {/* <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: false, tab3b: true, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Breads</Text></Button> */}
                                </Segment>
                            </Body>
                        </Header>
                        {/* <Content padder style={{ marginTop: 0, paddingTop: 0 }}> */}
                        {this.state.tab1b ?
                            <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                                <Accordion
                                    dataArray={dataArray1a}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                            </Content>
                            : null}
                        {this.state.tab2b ?
                            <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                                <Accordion
                                    dataArray={dataArray2a}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                            </Content>
                            : null}
                        {this.state.tab3b ?
                            <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                                <Accordion
                                    dataArray={dataArray4a}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                                <Text style={{ textAlign: "center", fontSize: 19, fontWeight: "bold" }}>Breads</Text>
                                <Accordion
                                    dataArray={dataArray3a}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                            </Content>
                            : null}
                        {/* {this.state.tab4b ?
                                <Accordion
                                    dataArray={dataArray4a}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                                : null} */}
                        {/* </Content> */}
                    </Container>
                )
                break;
            case 2:
                return (
                    <Container>
                        <Header hasSegment style={{ backgroundColor: "none" }}>
                            <Body>
                                <Segment style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }}>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} first onPress={() => { this.setState({ tab1: true, tab2: false, tab3: false }) }}><Text style={{ color: "#C21807" }}>Starters</Text></Button>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1: false, tab2: true, tab3: false }) }}><Text style={{ color: "#C21807" }}>Main Course</Text></Button>
                                    <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1: false, tab2: false, tab3: true }) }}><Text style={{ color: "#C21807" }}>Desserts</Text></Button>
                                </Segment>
                            </Body>
                        </Header>
                        <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                            {this.state.tab1 ?
                                // <Card>
                                //     <CardItem cardBody>
                                //         <Image source={CardImage} style={{ height: 200, width: null, flex: 1 }} />
                                //     </CardItem>
                                //     <CardItem>
                                //         <Body>
                                //             <View style={{ width: width / 1.1 }}>
                                //                 {
                                //                     Starters.map((numbers) => {
                                //                         return (
                                //                             <Text style={styles.cardText}>{numbers}</Text>
                                //                         )
                                //                     })}
                                //             </View>
                                //             {/* <Button onPress={() => { alert(index) }}><Text>Add to Card</Text></Button> */}
                                //         </Body>
                                //     </CardItem>
                                // </Card>
                                // <Container>
                                // <Header style={styles.hdr}>
                                //     <Title style={styles.txt}>Search</Title>
                                // </Header>
                                // <Content padder>
                                <Accordion
                                    dataArray={dataArray}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                                // </Content>
                                : null}
                            {this.state.tab2 ?
                                // <Card>
                                //     <CardItem cardBody>
                                //         <Image source={CardImage} style={{ height: 200, width: null, flex: 1 }} />
                                //     </CardItem>
                                //     <CardItem>
                                //         <Body>
                                //             <View style={{ width: width / 1.1 }}>
                                //                 {
                                //                     MainCourse.map((numbers) => {
                                //                         return (
                                //                             <Text style={styles.cardText}>{numbers}</Text>
                                //                         )
                                //                     })}
                                //             </View>
                                //             {/* <Button onPress={() => { alert(index) }}><Text>Add to Card</Text></Button> */}
                                //         </Body>
                                //     </CardItem>
                                // </Card>
                                // <Content padder>
                                <Accordion
                                    dataArray={dataArray1}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                                // </Content>
                                : null}
                            {this.state.tab3 ?
                                // <Card>
                                //     <CardItem cardBody>
                                //         <Image source={CardImage} style={{ height: 200, width: null, flex: 1 }} />
                                //     </CardItem>
                                //     <CardItem>
                                //         <Body>
                                //             <View style={{ width: width / 1.1 }}>
                                //                 {
                                //                     Desserts.map((numbers) => {
                                //                         return (
                                //                             <Text style={styles.cardText}>{numbers}</Text>
                                //                         )
                                //                     })}
                                //             </View>
                                //             {/* <Button onPress={() => { alert(index) }}><Text>Add to Card</Text></Button> */}
                                //         </Body>
                                //     </CardItem>
                                // </Card>
                                // <Content padder>
                                <Accordion
                                    dataArray={dataArray2}
                                    icon="add"
                                    expandedIcon="remove"
                                    iconStyle={{ color: "green" }}
                                    expandedIconStyle={{ color: "red" }}
                                    headerStyle={{ backgroundColor: "#a4a3ab5e" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                                // </Content>
                                : null}
                        </Content>
                    </Container>
                )
                break;
            case 3:
                return (
                    <Container>
                        {/* <Header style={styles.hdr1}>
                            <Left avatar>
                                <Thumbnail source={CardImage} style={styles.image1} />
                            </Left>
                            <Body>
                                <Title>John Doe</Title>
                            </Body>
                            <Right />
                        </Header> */}
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
                    <Text>Sorry</Text>
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
        fontFamily: "monospace",
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