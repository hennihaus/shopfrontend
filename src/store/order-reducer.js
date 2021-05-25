import {LOAD_ORDERS_FAILED, LOAD_ORDERS_SUCCESS, ORDER_SORT_DIRECTION} from "./order-actions";
import {convertToDate, updateState} from "../common/util";
import {orderSort} from "../common/model";

const initialState = {
    orderSort: orderSort.DATE_DESC,
    orders: null,
    errorLoadingOrders: null
};

const setOrders = (state, action) => {
    const orders = sortOrders(state.orderSort, [...action.payload.orders]);
    return updateState(state, {
        orders,
        errorLoadingOrders: false
    });
};

const loadingOrdersFailed = state => updateState(state, {
    errorLoadingOrders: true
});

const setOrderSort = (state, action) => {
    if (state.orders) {
        let orders = sortOrders(action.payload.orderSort, [...state.orders]);
        return updateState(state, {
            orders,
            orderSort: action.payload.orderSort,
        });
    }
    return updateState(state, {});
};

const sortOrders = (sortOrder, orders) => {
    switch (sortOrder) {
        case orderSort.DATE_ASC:
            return orders.sort((firstOrder, secondOrder) => convertToDate(firstOrder.orderDate).getTime() - convertToDate(secondOrder.orderDate).getTime());
        case orderSort.DATE_DESC:
            return orders.sort((firstOrder, secondOrder) => convertToDate(secondOrder.orderDate).getTime() - convertToDate(firstOrder.orderDate).getTime());
        case orderSort.PRICE_ASC:
            return orders.sort((firstOrder, secondOrder) => calcSum(firstOrder) - calcSum(secondOrder));
        case orderSort.PRICE_DESC:
            return orders.sort((firstOrder, secondOrder) => calcSum(secondOrder) - calcSum(firstOrder));
        default:
            return orders;
    }
};

const calcSum = order => order.articles.reduce((price, article) => price + article.price * article.quantity, 0);

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDERS_SUCCESS:
            return setOrders(state, action);
        case LOAD_ORDERS_FAILED:
            return loadingOrdersFailed(state);
        case ORDER_SORT_DIRECTION:
            return setOrderSort(state, action);
        default:
            return state;
    }
};

export default orderReducer;
