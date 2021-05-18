import {updateState} from "../util/state-util";
import {LOAD_ORDERS_FAILED, LOAD_ORDERS_SUCCESS} from "./order-actions";

const initialState = {};

const setOrders = (state, action) => updateState(state, {
    orders: [...action.payload.orders],
    errorLoadingOrders: false
});

const loadingOrdersFailed = state => updateState(state, {
    errorLoadingOrders: true
});

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDERS_SUCCESS:
            return setOrders(state, action);
        case LOAD_ORDERS_FAILED:
            return loadingOrdersFailed(state);
        default:
            return state;
    }
}

export default orderReducer;
