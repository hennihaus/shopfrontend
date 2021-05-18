import axios from "../api/axios-url";

export const LOAD_ORDERS_SUCCESS = 'LOAD_ORDERS_SUCCESS';
export const LOAD_ORDERS_FAILED = 'LOAD_ORDERS_FAILED';

const setOrders = (orders) => {
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
