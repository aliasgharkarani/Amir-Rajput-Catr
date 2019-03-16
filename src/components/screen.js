import React, { Component } from 'react';
import {
    Dimensions
} from 'react-native'
import {
    Text,
} from 'native-base';
const { height, width, fontScale } = Dimensions.get('window');
import Lunch from './Lunch.js'
import Menus from './menu.js'
import Cart from './Cart.js'
import PanAsian from './PanAsian.js'
import RoyalMughlai from './RoyalMughlai.js'
export default class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        switch (this.props.ScrnChng) {
            case 0:
                return (<Lunch/>)
                // return (<Menus card={this.props.card}/>)
                break;
            case 1:
                return (<RoyalMughlai card={this.props.card}/>)
                break;
            case 2:
                return (<PanAsian card={this.props.card}/>)
                break;
            case 3:
                return (<Cart cardItemsdet={this.props.cardItemsdet} deleteC={this.props.delete} totalAmount={this.props.totalAmount} navig={this.props.navigation}/>)
                break;
            default:
                return (
                    <Text>Contact: aliasgharkarani125@hotmail.com</Text>
                )
        }
    }
}