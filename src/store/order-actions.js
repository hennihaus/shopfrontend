import axios from "../common/axios-url";

export const LOAD_ORDERS_SUCCESS = 'LOAD_ORDERS_SUCCESS';
export const LOAD_ORDERS_FAILED = 'LOAD_ORDERS_FAILED';
export const ORDER_SORT_DIRECTION = 'ORDER_SORT_DIRECTION';

const setOrders = orders => {
    return {
        type: LOAD_ORDERS_SUCCESS,
        payload: {
            orders
        }
    };
};

const loadOrdersFailed = () => {
    return {
        type: LOAD_ORDERS_FAILED
    };
};

export const loadOrders = () => {
    return dispatch => {
        axios.get('/shop/orders', {withCredentials: true})
            .then(response => dispatch(setOrders(response.data)))
            .catch(error => {
                console.error(error);
                dispatch(loadOrdersFailed());
            });
    };
};

export const setOrderSort = orderSort => {
    return {
        type: ORDER_SORT_DIRECTION,
        payload: {
            orderSort
        }
    };
};
