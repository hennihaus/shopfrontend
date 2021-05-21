import './Orders.css';
import {Component} from "react";
import {connect} from "react-redux";
import {loadOrders} from "../../store/order-actions";
import Order from "./Order/Order";
import Title from "../UI/Title/Title";

class Orders extends Component {

    componentDidMount() {
        this.props.loadOrders();
    }

    render() {
        let orders = null;

        if (this.props.orders && this.props.articles) {
            orders = this.props.orders.map(order => (
                <Order key={order._id} order={order}/>
            ))
        }
        if (this.props.errorLoadingOrders || this.props.errorLoadingArticles) {
            orders = <div>Fehler beim Laden der Bestellungen</div>
        }
        if (this.props.orders && !this.props.orders.length) {
            orders = <div>Noch keine Bestellungen getätigt!</div>
        }

        return (
            <div className='Orders'>
                <Title>Bestellungen</Title>
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


export default connect(mapStateToProps, mapDispatchToProps)(Orders);
