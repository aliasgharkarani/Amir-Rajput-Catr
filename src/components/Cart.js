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
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
const { width, fontScale } = Dimensions.get('window');
import { connect } from 'react-redux'
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <ScrollView>
                    <Content scrollEnabled={false}>
                        {this.props.todo.map((itm, index) => {
                            return (
                                <SwipeRow
                                    rightOpenValue={-75}
                                    body={<View style={{ width, display: "flex", flexDirection: "row" }}>
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: width / 1.35 }}>
                                            <Text>{itm.MenuName}-{itm.Quantity}*{itm.Price}</Text>
                                        </View>
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: width / 4 }}>
                                            <Text>{itm.Total}</Text>
                                        </View>
                                    </View>}
                                    right={
                                        <Button danger onPress={() => this.props.deletePost(index)}>
                                            <Icon active name="trash" />
                                        </Button>}
                                />)
                        })}
                        {this.props.todo.length ?
                            <View>
                                <List>
                                    <ListItem>
                                        <Left>
                                            <Text style={{ color: "red", fontSize: 20 }}>Total Price</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{ color: "blue", fontSize: 20 }}>{this.props.total}</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                                <Button
                                    full
                                    primary
                                    style={{ backgroundColor: '#C21807' }}
                                    onPress={() => this.props.navigation1.navigate('SelectCity')}
                                ><Text style={{ fontSize: 20 }}>ORDER</Text></Button>
                            </View>
                            : null
                        }
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_TODO', index: id }) }
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        total: state.total
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)