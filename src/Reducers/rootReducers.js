const initialState = {
    todo: [],
    total: 0,
    order: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        let temporder = state.order;
        let tot = state.total;
        tot += action.OrderDetails.price * action.Quantity;
        ++temporder;
        let obj = {
            Quantity: action.Quantity,
            MenuName: action.OrderDetails.menuName,
            Price: action.OrderDetails.price,
            Total: action.OrderDetails.price * action.Quantity
        };
        let temporderDetails = [...state.todo];
        temporderDetails.push(obj)
        return {
            todo: temporderDetails,
            total: tot,
            order: temporder
        }
    }
    else if (action.type === 'DELETE_TODO') {
        let temporder = state.order;
        --temporder;
        let tot = state.total;
        tot -= state.todo[action.index].Total;
        let temporderDetails = [...state.todo];
        temporderDetails.splice(action.index, 1)
        if (!temporderDetails.length) {
            return {
                todo: [],
                total: 0,
                order: 0
            }
        }
        else {
            return {
                todo: temporderDetails,
                total: tot,
                order: temporder
            }
        }
    }
    else if (action.type === 'CLEAR_TODO') {
        return {
            todo: [],
            total: 0,
            order: 0
        }
    }
    return state;
}
export default rootReducer;