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
import Menu1 from '../assets/menu1.jpeg'
import Menu2 from '../assets/menu2.jpeg'
import Menu3 from '../assets/menu3.jpeg'
import Menu4 from '../assets/menu4.jpeg'

import StarterRMTikka from '../assets/tikka.jpg'
import StarterRMChapliK from '../assets/ChapliK.jpg'
import StarterRMChaap from '../assets/chaap.jpg'
import StarterRMButterflyJhinga from '../assets/BUTTERFLY_JHIN_.jpg'
import StarterRMMachiAnarkali  from '../assets/anarkali.jpg'

import MainCourseRMChickenM from '../assets/chickenm.jpg'
import MainCourseRMLambKorma from '../assets/lambkorma.jpg'
import MainCourseRMTawaChicken from '../assets/tawachicken.jpg'
import MainCourseRMSagosht from '../assets/sagosht.jpg'
import MainCourseRMTarkaDall  from '../assets/tadkadal.jpg'
import MainCourseRMDallMakhni  from '../assets/DalMakhani.jpg'
import MainCourseRMAlooTakari  from '../assets/SaagAloo.jpg'
import MainCourseRMZafraniBiryani  from '../assets/ZafraniBiryani.jpg'
import MainCourseRMAfghaniPulao  from '../assets/AfghaniPulao.jpg'

import BreadsRMTandooriNaan  from '../assets/Tandoorinaan.jpg'
import BreadsRMGarlicNaan  from '../assets/GarlicNaan.jpg'
import BreadsRMSheermall  from '../assets/Sheermal.jpg'
import BreadsRMTaftan  from '../assets/Taftan.jpg'
import BreadsRMTandooriRoti  from '../assets/tandooriroti.jpg'

import DessertsRMShahiTukra  from '../assets/ShahiTukra.jpg'
import DessertsRMShahiKheer  from '../assets/ShahiKheer.jpg'
import DessertsRMDalHalwa  from '../assets/Dalhalwa.jpg'

import StarterPAPrawnTempura from '../assets/prawntempura.jpg'
import StarterPAChickenSatay from '../assets/chickensatay.jpg'
import StarterPACrispySpringRolls from '../assets/crispyroll.jpg'
import StarterPATomYumSoup from '../assets/tomyumsoup.jpg'
import StarterPAHotSourSoup from '../assets/H&Tsoup.jpg'

import MainCoursePATeppanyakiGrillLive from '../assets/teppanyakigrill.jpg'
import MainCoursePAChickenBeefPrawnFish from '../assets/chickenprawnsbeef.jpg'
import MainCoursePASaucesChiliThaiRedGreenCurryGarlic from '../assets/curry.jpg'
import MainCoursePATeriyakiGrillLive from '../assets/TeriyakiGrill.jpg'
import MainCoursePAChickenBeef from '../assets/chickenbeef.jpg'
import MainCoursePASauceTeriyaki from '../assets/SauceTeriyaki.jpg'
import MainCoursePATigerPrawns from '../assets/tigerprawns.jpg'
import MainCoursePAThaiGreenCurry from '../assets/ThaiGreenCurry.jpg'
import MainCoursePALemongrassChicken from '../assets/lemongrasschicken.jpg'
import MainCoursePABlackPepperBeef from '../assets/blackpepperbeef.jpg'

import DessertsPASummerBreeze from '../assets/SummerBreeze.jpg'
import DessertsPAIceCreamwithEspressoorChocolateSyrup from '../assets/ice-creamwithespresso.jpg'
import DessertsPAMangoCoconutIceCreams from '../assets/mangococnuticecream.jpg'
import DessertsPAFreshTropicalFruits from '../assets/freshtropicalfruits.jpg'

// import { ScrollView } from 'react-native-gesture-handler';
var height = Dimensions.get('window').height;
var width = Dimensions.get("window").width;
var Menus = [
    { pic:Menu1,menuName: "Menu 01", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH LAHORI", "CHICKEN RESHMI KABAB", "MUTTON KUNNA", "CHICKEN BIRYANI", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GULAB JAMAN", "CREAM CARAMEL"], "price": 10000 },
    { pic:Menu2,menuName: "Menu 02", items: ["FRESH JUICES ON ARRIVAL", "CHAPLI / SEEKH KABAB", "CHICKEN MALAI BOTI", "CHICKEN ZAFRANI BIRYANI", "CHICKEN BADAMI QORMA", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "GAJAR KA HALWA", "FRUIT TRIFFLE"], "price": 15000 },
    { pic:Menu3,menuName: "Menu 03", items: ["FRESH JUICES ON ARRIVAL", "GRILLED FISH", "CHICKEN BIHARI BOTI", "CHICKEN KARAHI", "MUTTON YAKHNI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "RABRI KHEER", "LAB-E-SHEEREN"], "price": 20000 },
    { pic:Menu4,menuName: "Menu 04", items: ["FRESH JUICES ON ARRIVAL", "FRIED FISH ORLY", "CHICKEN STEAM", "CHICKEN PESHAWARI KARAHI", "KASHMIRI PULAO", "NAN & TAFTAN", "ASSORTED SALAD BAR", "ASSORTED CHATNIES", "SPECIAL ZARDA", "DOODH DULARI"], "price": 25000 }
]
var PAStarters = [
    { pic:StarterPAPrawnTempura,menuName: "Prawn Tempura", type: "Pan Asian", price: 100 },
    { pic:StarterPAChickenSatay,menuName: "Chicken Satay", type: "Pan Asian", price: 100 },
    { pic:StarterPACrispySpringRolls,menuName: "Crispy Spring Rolls", type: "Pan Asian", price: 100 },
    { pic:StarterPATomYumSoup,menuName: "Tom Yum Soup", type: "Pan Asian", price: 100 },
    { pic:StarterPAHotSourSoup,menuName: "Hot & Sour Soup", type: "Pan Asian", price: 100 }]
var PAMainCourse = [
    { pic:MainCoursePATeppanyakiGrillLive,menuName: "Teppanyaki Grill Live", type: "Pan Asian", price: 100 },
    { pic:MainCoursePAChickenBeefPrawnFish,menuName: "Chicken- Beef- Prawn- Fish", type: "Pan Asian", price: 100 },
    { pic:MainCoursePASaucesChiliThaiRedGreenCurryGarlic,menuName: "Sauces: Chili- Thai Red & Green Curry- Garlic", type: "Pan Asian", price: 100 },
    { pic:MainCoursePATeriyakiGrillLive,menuName: "Teriyaki Grill Live", type: "Pan Asian", price: 100 },
    { pic:MainCoursePAChickenBeef,menuName: "Chicken- Beef", type: "Pan Asian", price: 100 },
    { pic:MainCoursePASauceTeriyaki,menuName: "Sauce: Teriyaki", type: "Pan Asian", price: 100 },
    { pic:MainCoursePATigerPrawns,menuName: "Tiger Prawns", type: "Pan Asian", price: 100 },
    { pic:MainCoursePAThaiGreenCurry,menuName: "Thai Green Curry", type: "Pan Asian", price: 100 },
    { pic:MainCoursePALemongrassChicken,menuName: "Lemongrass Chicken", type: "Pan Asian", price: 100 },
    { pic:MainCoursePABlackPepperBeef,menuName: "Black Pepper Beef", type: "Pan Asian", price: 100 }
]
var PADesserts = [
    { pic:DessertsPASummerBreeze,menuName: "Summer Breeze", type: "Pan Asian", price: 100 },
    { pic:DessertsPAIceCreamwithEspressoorChocolateSyrup,menuName: "Ice Cream with Espresso or Chocolate Syrup", type: "Pan Asian", price: 100 },
    { pic:DessertsPAMangoCoconutIceCreams,menuName: "Mango- Coconut Ice Creams", type: "Pan Asian", price: 100 },
    { pic:DessertsPAFreshTropicalFruits,menuName: "Fresh Tropical Fruits", type: "Pan Asian", price: 100 }
] 
const RMStarters = [
    { pic:StarterRMTikka,menuName: "Murgh Tikka Lahori", type: "Royal Mughlai", price: 100 },
    { pic:StarterRMChapliK,menuName: "Chapli Kabab Peshawari", type: "Royal Mughlai", price: 100 },
    { pic:StarterRMChaap,menuName: "Kabuli Chaap", type: "Royal Mughlai", price: 100 },
    { pic:StarterRMButterflyJhinga,menuName: "Butterfly Jhinga", type: "Royal Mughlai", price: 100 },
    { pic:StarterRMMachiAnarkali,menuName: "Machi Anarkali", type: "Royal Mughlai", price: 100 }
];
const RMMainCourse = [
    { pic:MainCourseRMChickenM,menuName: "Chicken Makhni", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMLambKorma,menuName: "Lamb Zafarani Korma", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMTawaChicken,menuName: "Tawa Chicken", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMSagosht,menuName: "Sag Gosht", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMTarkaDall,menuName: "Tarka Dall", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMDallMakhni,menuName: "Dal Makhni", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMAlooTakari,menuName: "Sag GoshtAloo ki Tarkari", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMZafraniBiryani,menuName: "Zafrani Biryani", type: "Royal Mughlai", price: 100 },
    { pic:MainCourseRMAfghaniPulao,menuName: "Afghani Pulao", type: "Royal Mughlai", price: 100 }
];
const RMBreads = [
    { pic:BreadsRMTandooriNaan,menuName: "Tandoori Naan", type: "Royal Mughlai", price: 100 },
    { pic:BreadsRMGarlicNaan,menuName: "Garlic Naan", type: "Royal Mughlai", price: 100 },
    { pic:BreadsRMSheermall,menuName: "Sheermall", type: "Royal Mughlai", price: 100 },
    { pic:BreadsRMTaftan,menuName: "Taftan", type: "Royal Mughlai", price: 100 },
    { pic:BreadsRMTandooriRoti,menuName: "Tandoori Roti", type: "Royal Mughlai", price: 100 }
];
const RMDesserts = [
    { pic:DessertsRMShahiTukra,menuName: "Shahi Tukra", type: "Royal Mughlai", price: 100 },
    { pic:DessertsRMShahiKheer,menuName: "Shahi Kheer", type: "Royal Mughlai", price: 100 },
    { pic:DessertsRMDalHalwa,menuName: "Daal ka Halwa", type: "Royal Mughlai", price: 100 }
];
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
                                                    <Image source={mu.pic} style={{ height: 200, width: null, flex: 1 }} />
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
                                                        <Thumbnail square source={numbers.pic} />
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
                                                            <Thumbnail square source={numbers.pic} />
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
                                                            <Thumbnail square source={numbers.pic} />
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
                                                        <Thumbnail square source={numbers.pic} />
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
                                                        <Thumbnail square source={numbers.pic} />
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
                                                        <Thumbnail square source={numbers.pic} />
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
                                                        <Thumbnail square source={numbers.pic} />
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
        fontFamily: "monospace"
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