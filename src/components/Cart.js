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
    SwipeRow,
    Button,
    Icon
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import firebase from 'react-native-firebase'

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
                        {this.props.cardItemsdet.map((itm, i) => {
                            return (
                                <SwipeRow
                                    rightOpenValue={-75}
                                    body={
                                        <View>
                                            <Text>{itm.MenuName}</Text>
                                        </View>
                                    }
                                    right={
                                        <Button danger onPress={() => this.props.delete(i)}>
                                            <Icon active name="trash" />
                                        </Button>
                                    }
                                />
                            )
                        })
                        }
                        {
                            this.props.cardItemsdet.length ?
                                <Button
                                    full
                                    primary
                                    style={{ backgroundColor: "red" }}
                                    onPress={() => this.props.navig.navigate('SelectCity')}
                                >
                                     <Text>
                                         ORDER
                                      </Text></Button>
                                 : null
                        }
                    </Content>
                </Container>
                )}
}