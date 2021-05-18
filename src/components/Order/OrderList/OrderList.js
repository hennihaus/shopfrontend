import './OrderList.css';
import {Component} from "react";
import {connect} from "react-redux";
import {loadOrders} from "../../../store/order-actions";
import OrderListItem from "../OrderListItem/OrderListItem";

class OrderList extends Component {

    componentDidMount() {
        this.props.loadOrders();
    }

    render() {
        let orders = null;

        if (this.props.orders && this.props.articles) {
            orders = this.props.orders.map(order => (
                <OrderListItem key={order._id} order={order}/>
            ))
        }
        if (this.props.errorLoadingOrders || this.props.errorLoadingArticles) {
            orders = <div>Fehler beim Laden der Bestellungen</div>
        }
        if (this.props.orders && !this.props.orders.length) {
            orders = <div>Noch keine Bestellungen getätigt!</div>
        }

        return (
            <div className='OrderList'>
                <h3>Bestellungen</h3>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articleReducer.articles,
        orders: state.orderReducer.orders,
        errorLoadingArticles: state.articleReducer.errorLoadingArticles,
        errorLoadingOrders: state.orderReducer.errorLoadingOrders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: () => dispatch(loadOrders())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
