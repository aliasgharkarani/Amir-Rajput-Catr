import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    BackHandler,
    Dimensions,
    defaultProps,
    Image,
    AppRegistry,
    ScrollView,
    TextInput
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
    Accordion,
    Footer,
    FooterTab,
    CheckBox
} from 'native-base';
import CardImage from './img.jpeg'
// import { ScrollView } from 'react-native-gesture-handler';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
var Menus = [
    { menuName: "Menu 01", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH LAHORI", "CHICKEN RESHMI KABAB", "MUTTON KUNNA", "CHICKEN BIRYANI", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GULAB JAMAN", "CREAM CARAMEL"], "price": 10000 },
    { menuName: "Menu 02", items: ["FRESH JUICES ON ARRIVAL", "CHAPLI / SEEKH KABAB", "CHICKEN MALAI BOTI", "CHICKEN ZAFRANI BIRYANI", "CHICKEN BADAMI QORMA", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GAJAR KA HALWA", "FRUIT TRIFFLE"], "price": 15000 },
    { menuName: "Menu 03", items: ["FRESH JUICES ON ARRIVAL", "GRILLED FISH", "CHICKEN BIHARI BOTI", "CHICKEN KARAHI", "MUTTON YAKHNI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "RABRI KHEER", "LAB-E-SHEEREN"], "price": 20000 },
    { menuName: "Menu 04", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH ORLY", "CHICKEN STEAM", "CHICKEN PESHAWARI KARAHI", "KASHMIRI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "SPECIAL ZARDA", "DOODH DULARI"], "price": 25000 }
]
var PAStarters = [
    { menuName: "Prawn Tempura", type: "Pan Asian", price: 100 },
    { menuName: "Chicken Satay", type: "Pan Asian", price: 100 },
    { menuName: "Crispy Spring Rolls", type: "Pan Asian", price: 100 },
    { menuName: "Tom Yum Soup", type: "Pan Asian", price: 100 },
    { menuName: "Hot & Sour Soup", type: "Pan Asian", price: 100 }]
var PAMainCourse = [
    { menuName: "Teppanyaki Grill Live", type: "Pan Asian", price: 100 },
    { menuName: "Chicken- Beef- Prawn- Fish", type: "Pan Asian", price: 100 },
    { menuName: "Sauces: Chili- Thai Red & Green Curry- Garlic", type: "Pan Asian", price: 100 },
    { menuName: "Teriyaki Grill Live", type: "Pan Asian", price: 100 },
    { menuName: "Chicken- Beef", type: "Pan Asian", price: 100 },
    { menuName: "Sauce: Teriyaki", type: "Pan Asian", price: 100 },
    { menuName: "Tiger Prawns", type: "Pan Asian", price: 100 },
    { menuName: "Thai Green Curry", type: "Pan Asian", price: 100 },
    { menuName: "Lemongrass Chicken", type: "Pan Asian", price: 100 },
    { menuName: "Black Pepper Beef", type: "Pan Asian", price: 100 }
]
var PADesserts = [
    { menuName: "Summer Breeze", type: "Pan Asian", price: 100 },
    { menuName: "Ice Cream with Espresso or Chocolate Syrup", type: "Pan Asian", price: 100 },
    { menuName: "Mango- Coconut Ice Creams", type: "Pan Asian", price: 100 },
    { menuName: "Fresh Tropical Fruits", type: "Pan Asian", price: 100 }
]
const RMStarters = [
    { menuName: "Murgh Tikka Lahori", type: "Royal Mughlai", price: 100 },
    { menuName: "Chapli Kabab Peshawari", type: "Royal Mughlai", price: 100 },
    { menuName: "Kabuli Chaanp", type: "Royal Mughlai", price: 100 },
    { menuName: "Butterfly Jhinga", type: "Royal Mughlai", price: 100 },
    { menuName: "Machi Anarkali", type: "Royal Mughlai", price: 100 }
];
const RMMainCourse = [
    { menuName: "Chicken Makhni", type: "Royal Mughlai", price: 100 },
    { menuName: "Lamb Zafarani Korma", type: "Royal Mughlai", price: 100 },
    { menuName: "Tawa Chicken", type: "Royal Mughlai", price: 100 },
    { menuName: "Sag Gosht", type: "Royal Mughlai", price: 100 },
    { menuName: "Tarka Dall", type: "Royal Mughlai", price: 100 },
    { menuName: "Dal Makhni", type: "Royal Mughlai", price: 100 },
    { menuName: "Sag GoshtAloo ki Tarkari", type: "Royal Mughlai", price: 100 },
    { menuName: "Zafrani Biryani", type: "Royal Mughlai", price: 100 },
    { menuName: "Afghani Pulao", type: "Royal Mughlai", price: 100 }
];
const RMBreads = [
    { menuName: "Tandoori Naan", type: "Royal Mughlai", price: 100 },
    { menuName: "Garlic Naan", type: "Royal Mughlai", price: 100 },
    { menuName: "Sheermall", type: "Royal Mughlai", price: 100 },
    { menuName: "Taftan", type: "Royal Mughlai", price: 100 },
    { menuName: "Tandoori Roti", type: "Royal Mughlai", price: 100 }
];
const RMDesserts = [
    { menuName: "Shahi Tukra", type: "Royal Mughlai", price: 100 },
    { menuName: "Shahi Kheer", type: "Royal Mughlai", price: 100 },
    { menuName: "Daal ka Halwa", type: "Royal Mughlai", price: 100 }
];
// const dataArray = [
//     { title: "Prawn Tempura", content: "one" },
//     { title: "Chicken Satay", content: "two" },
//     { title: "Crispy Spring Rolls", content: "three" },
//     { title: "Tom Yum Soup", content: "three" },
//     { title: "Hot & Sour Soup", content: "three" }
// ];
// const dataArray1 = [
//     { title: "Teppanyaki Grill Live", content: "one" },
//     { title: "Chicken- Beef- Prawn- Fish", content: "two" },
//     { title: "Sauces: Chili- Thai Red & Green Curry- Garlic", content: "three" },
//     { title: "Teriyaki Grill Live", content: "three" },
//     { title: "Chicken- Beef", content: "three" },
//     { title: "Sauce: Teriyaki", content: "three" },
//     { title: "Tiger Prawns", content: "three" },
//     { title: "Thai Green Curry", content: "three" },
//     { title: "Lemongrass Chicken", content: "three" },
//     { title: "Black Pepper Beef", content: "three" },
// ];
// const dataArray2 = [
//     { title: "Summer Breeze", content: "one" },
//     { title: "Ice Cream with Espresso or Chocolate Syrup", content: "two" },
//     { title: "Mango- Coconut Ice Creams", content: "three" },
//     { title: "Fresh Tropical Fruits", content: "three" }
// ];
// const dataArray1a = [
//     { title: "Murgh Tikka Lahori", content: "one" },
//     { title: "Chapli Kabab Peshawari", content: "two" },
//     { title: "Kabuli Chaanp", content: "three" },
//     { title: "Butterfly Jhinga", content: "three" },
//     { title: "Machi Anarkali", content: "three" }
// ];
// const dataArray2a = [
//     { title: "Chicken Makhni", content: "one" },
//     { title: "Lamb Zafarani Korma", content: "two" },
//     { title: "Tawa Chicken", content: "three" },
//     { title: "Sag Gosht", content: "three" },
//     { title: "Tarka Dall", content: "three" },
//     { title: "Dal Makhni", content: "three" },
//     { title: "Sag GoshtAloo ki Tarkari", content: "three" },
//     { title: "Zafrani Biryani", content: "three" },
//     { title: "Sag GoshtAloo ki Tarkari", content: "three" },
//     { title: "Afghani Pulao", content: "three" }
// ];
// const dataArray3a = [
//     { title: "Tandoori Naan", content: "one" },
//     { title: "Garlic Naan", content: "two" },
//     { title: "Sheermall", content: "three" },
//     { title: "Taftan", content: "three" },
//     { title: "Tandoori Roti", content: "three" }
// ];
// const dataArray4a = [
//     { title: "Shahi Tukra", content: "one" },
//     { title: "Shahi Kheer", content: "two" },
//     { title: "Daal ka Halwa", content: "three" }
// ];
export default class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab1: false,
            tab2: true,
            tab3: false,
            tab1b: false,
            tab2b: true,
            tab3b: false,
            tab4b: false,
            qty: 1,
            a3: 0,
            a2: 0,
            a1: 0,
            a0: 0,
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
            h3: 0
        }
    }
    clear = (abc) => {
        this.setState({
            qty: "",
            [abc]: 0
        })
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
                                                            <TextInput
                                                                // underlineColorAndroid="white"
                                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
                                                                onChangeText={(qty) => this.setState({ ["a" + index]: qty })}
                                                                value={this.state["a" + index]}
                                                                name={"a" + index}
                                                                placeholder="1"
                                                                placeholderTextColor="red"
                                                                autoCapitalize='none'
                                                            />
                                                            <Button onPress={() => { this.props.card(mu, this.state["a" + index]); this.clear("a" + index); }}><Text>ORDER</Text></Button>
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
                                    <Button style={{ backgroundColor: this.state.tab1b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} first onPress={() => { this.setState({ tab1b: true, tab2b: false, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Starters</Text></Button>
                                    <Button style={{ backgroundColor: this.state.tab2b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: true, tab3b: false, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Main Course</Text></Button>
                                    <Button style={{ backgroundColor: this.state.tab3b ? "yellow" : "white", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: false, tab3b: true, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Desserts</Text></Button>
                                    {/* <Button style={{ backgroundColor: "none", borderColor: "#C21807", borderWidth: 1 }} last onPress={() => { this.setState({ tab1b: false, tab2b: false, tab3b: true, tab4b: false }) }}><Text style={{ color: "#C21807" }}>Breads</Text></Button> */}
                                </Segment>
                            </Body>
                        </Header>
                        <Content padder style={{ marginTop: 0, paddingTop: 0 }}>
                            {this.state.tab1b ?
                                <List>
                                    {
                                        RMStarters.map((numbers, index) => {
                                            return (
                                                <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                    </Left>
                                                    <Body style={{ borderBottomWidth: 0 }}>
                                                        <Text>{numbers.menuName}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right style={{ borderBottomWidth: 0 }}>
                                                        <TextInput
                                                            // underlineColorAndroid="white"
                                                            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
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
                                        {
                                            RMMainCourse.map((numbers, index) => {
                                                return (
                                                    <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                        <Left>
                                                            <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                        </Left>
                                                        <Body style={{ borderBottomWidth: 0 }}>
                                                            <Text>{numbers.menuName}</Text>
                                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                        </Body>
                                                        <Right style={{ borderBottomWidth: 0 }}>
                                                            <TextInput
                                                                // underlineColorAndroid="white"
                                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
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
                                            })}
                                    </List>
                                    <Text style={{ textAlign: "center", fontSize: 23, fontWeight: "bold" }}>Breads</Text>
                                    <List>
                                        {
                                            RMBreads.map((numbers, index) => {
                                                return (
                                                    <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                        <Left>
                                                            <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                        </Left>
                                                        <Body style={{ borderBottomWidth: 0 }}>
                                                            <Text>{numbers.menuName}</Text>
                                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                        </Body>
                                                        <Right style={{ borderBottomWidth: 0 }}>
                                                            <TextInput
                                                                // underlineColorAndroid="white"
                                                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
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
                                    {
                                        RMDesserts.map((numbers, index) => {
                                            return (
                                                <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                    </Left>
                                                    <Body style={{ borderBottomWidth: 0 }}>
                                                        <Text>{numbers.menuName}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right style={{ borderBottomWidth: 0 }}>
                                                        <TextInput
                                                            // underlineColorAndroid="white"
                                                            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 8, width: width / 8, color: "red", backgroundColor: "none", fontSize: 19, paddingRight: "2%", paddingLeft: "2%" }}
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
                break;
            case 2:
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
                                    {
                                        PAStarters.map((numbers, index) => {
                                            return (
                                                <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                    </Left>
                                                    <Body style={{ borderBottomWidth: 0 }}>
                                                        <Text>{numbers.menuName}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right style={{ borderBottomWidth: 0 }}>
                                                        <TextInput
                                                            // underlineColorAndroid="white"
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
                                    {
                                        PAMainCourse.map((numbers, index) => {
                                            return (
                                                <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
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
                                    {
                                        PADesserts.map((numbers, index) => {
                                            return (
                                                <ListItem thumbnail style={{ height: width / 4.2, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} />
                                                    </Left>
                                                    <Body style={{ borderBottomWidth: 0 }}>
                                                        <Text>{numbers.menuName}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right style={{ borderBottomWidth: 0 }}>
                                                        <TextInput
                                                            // underlineColorAndroid="white"
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
                    </Container>
                )
                break;
            case 3:
                return (
                    // <Container>
                    //     {/* <Header style={styles.hdr1}>
                    //         <Left avatar>
                    //             <Thumbnail source={CardImage} style={styles.image1} />
                    //         </Left>
                    //         <Body>
                    //             <Title>John Doe</Title>
                    //         </Body>
                    //         <Right />
                    //     </Header> */}
                    //     <Content>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="heart" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button
                    //                     transparent
                    //                     onPress={() => {
                    //                         this.handleChange();
                    //                     }}
                    //                 >
                    //                     <Text style={styles.textStyle1}>{this.props.cardItemsno}</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="wallet" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button
                    //                     transparent
                    //                     onPress={() => {
                    //                         this.handleChange1();
                    //                     }}
                    //                 >
                    //                     <Text style={styles.textStyle1}></Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="help" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button transparent>
                    //                     <Text style={styles.textStyle1}>HELP</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="share" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button transparent>
                    //                     <Text style={styles.textStyle1}>FREE FOOD</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="star" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button transparent>
                    //                     <Text style={styles.textStyle1}>PROMOTIONS</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="cart" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button transparent>
                    //                     <Text style={styles.textStyle1}>DELIVER WITH ROTIAPP</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //         <ListItem icon>
                    //             <Left>
                    //                 <Button style={{ backgroundColor: "#C21807" }}>
                    //                     <Icon active name="person" />
                    //                 </Button>
                    //             </Left>
                    //             <Body>
                    //                 <Button
                    //                     transparent
                    //                     onPress={() => {
                    //                         this.handleChange2();
                    //                     }}
                    //                 >
                    //                     <Text style={styles.textStyle1}>SETTINGS</Text>
                    //                 </Button>
                    //             </Body>
                    //         </ListItem>
                    //     </Content>
                    // </Container>
                    <Container>
                        <ScrollView>
                            <Content>
                                <List>
                                    {this.props.cardItemsdet.map((itm, i) => {
                                        return (
                                            <ListItem selected>
                                                <Left>
                                                    {/* <View style={{ width: "20%",backgroundColor:"yellow" }}> */}
                                                    <Text>{itm.MenuName}</Text>
                                                    {/* </View> */}
                                                </Left>
                                                {/* <View style={{ width: "35%" }}></View> */}
                                                <Right style={{ display: "flex", flexDirection: "row" }}>
                                                    {/* <View style={{ width: "20%",backgroundColor:"green", display: "flex", flexDirection: "row"}}> */}
                                                    <Text>{itm.quantity}x</Text>
                                                    <Text>{itm.price}</Text>
                                                    {/* </View> */}
                                                </Right>
                                            </ListItem>
                                        )
                                    })
                                    }
                                    <ListItem>
                                        <View style={{ width: "35%" }}>
                                            <Text style={{ color: "red", fontSize: 20 }}>Total Price</Text>
                                        </View>
                                        <View style={{ width: "30%" }}></View>
                                        <View style={{ width: "35%" }}>
                                            <Text style={{ color: "blue", fontSize: 22 }}>{this.props.totalAmount}</Text>
                                        </View>
                                    </ListItem>
                                    {/* <Button onPress={() => this.props.navigation.navigate('Home')}><Text>
                                        ADD DETAILS
                                    </Text></Button> */}
                                    <Button
                                        full
                                        primary
                                        style={{ backgroundColor: "red" }}
                                        onPress={() => this.props.navig.navigate('SelectCity')}
                                    >
                                        <Text>
                                            ORDER
                                        </Text></Button>
                                </List>
                            </Content>
                        </ScrollView>
                        {/* <Footer>
                            <Button full style={{ elevation: 0, width: "100%" }}>
                                <Text style={{ fontSize: 23, fontWeight: 'bold', color: "white" }}>Add Details</Text>
                            </Button>
                        </Footer> */}
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