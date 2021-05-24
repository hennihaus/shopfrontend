import './Orders.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadOrders} from "../../store/order-actions";
import Order from "./Order/Order";
import Title from "../UI/Title/Title";
import OrderSort from "./OrderSort/OrderSort";

function Orders() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadOrders());
    }, [dispatch]);
    const articles = useSelector(state => state.articleReducer.articles);
    const orders = useSelector(state => state.orderReducer.orders);
    const errorLoadingArticles = useSelector(state => state.articleReducer.errorLoadingArticles);
    const errorLoadingOrders = useSelector(state => state.orderReducer.errorLoadingOrders);

    return (
        <div className='Orders'>
            <div className='Orders__Header'>
                <Title>Bestellungen</Title>
                <OrderSort/>
            </div>
            {
                orders && articles
                    ? orders.map(order => <Order key={order._id} order={order}/>)
                    : null
            }
            {
                !orders && (errorLoadingOrders || errorLoadingArticles)
                    ? <div>Fehler beim Laden der Bestellungen</div>
                    : null
            }
            {
                orders && !orders.length
                    ? <div>Noch keine Bestellungen getätigt!</div>
                    : null
            }
        </div>
    )
}

export default Orders;
