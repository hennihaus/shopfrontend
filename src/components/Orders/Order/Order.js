import './Order.css';
import {Component} from "react";
import Button from "../../UI/Button/Button";
import OrderDetails from "./OrderDetails/OrderDetails";

class Order extends Component {

    state = {
        isDetailViewOpen: false
    }

    render() {
        let isDetailViewOpen;

        if (this.state.isDetailViewOpen) {
            isDetailViewOpen = <Button click={() => this.setState({isDetailViewOpen: false})}>-</Button>
        } else {
            isDetailViewOpen = <Button click={() => this.setState({isDetailViewOpen: true})}>+</Button>
        }

        return (
            <div className='Order'>
                <div>BestellNr: {this.props.order.orderNr}</div>
                <div>Datum: {this.props.order.orderDate}</div>
                {isDetailViewOpen}
                {
                    this.state.isDetailViewOpen ? this.props.order.articles.map(orderArticle => (
                        <OrderDetails key={orderArticle._id} orderArticle={orderArticle}/>
                    )) : null
                }
                <div>Summe: {parseFloat(this.props.order.articles.reduce((price, article) => price + article.price * article.quantity, 0)).toFixed(2)} Euro</div>
                <br/>
            </div>
        )
    }
}

export default Order;
