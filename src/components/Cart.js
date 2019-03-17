import React, { Component } from 'react';
import {
    View,
    Dimensions,
} from 'react-native'
import {
    Text,
    Container,
    Content,
    SwipeRow,
    Button,
    Icon,
    List,
    ListItem,
    Left,
    Right
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Container>
                <Content scrollEnabled={false}>
                    {this.props.cardItemsdet.map((itm, index) => {
                        return (
                            <SwipeRow
                                rightOpenValue={-75}
                                body={<View style={{ width, display: "flex", flexDirection: "row" }}>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: width / 1.35 }}>
                                        <Text>{itm.MenuName}-{itm.quantity}*{itm.price}</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: width / 4 }}>
                                        <Text>{itm.Total}</Text>
                                    </View>
                                </View>}
                                right={
                                    <Button danger onPress={() => this.props.deleteC(index)}>
                                        <Icon active name="trash" />
                                    </Button>}
                            />)
                    })}
                    {this.props.cardItemsdet.length ?
                        <View>
                            <List>
                                <ListItem>
                                    <Left>
                                        <Text style={{ color: "red", fontSize: 20 }}>Total Price</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ color: "blue", fontSize: 20 }}>{this.props.totalAmount}</Text>
                                    </Right>
                                </ListItem>
                            </List>
                            <Button
                                full
                                primary
                                style={{ backgroundColor: '#C21807' }}
                                onPress={() => this.props.navig.navigate('SelectCity')}
                            ><Text style={{ fontSize: 20 }}>ORDER</Text></Button>
                        </View>
                        : null
                    }
                </Content>
            </Container>
        )
    }
}