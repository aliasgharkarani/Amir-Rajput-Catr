// switch (this.state.a) {
//     case "A":
//     alert("Sunday");
//     break;
//   case "B":
//     day = "Monday";
//     break;
//   case "C":
//     day = "Tuesday";
//     break;
//   case "D":
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
import React, { Component } from 'react';
import { Text, View } from 'native-base';
export default class Screen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        switch (this.props.ScrnChng) {
            case 0:
                return (
                    <Text>Screen-1 Displayed</Text>
                )
                break;
            case 1:
                return (
                    <Text>Screen-2 Displayed</Text>
                )
                break;
            case 2:
                return (
                    <Text>Screen-3 Displayed</Text>
                )
                break;
            case 3:
                return (
                    <Text>Screen-4 Displayed</Text>
                )
                break;
            default:
                return (
                    <Text>Default</Text>
                )
        }
    }
}