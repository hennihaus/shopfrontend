import './OrderListItem.css';
import {Component} from "react";
import OrderListDetails from "../OrderListDetails/OrderListDetails";
import Button from "../../UI/Button/Button";

class OrderListItem extends Component {

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
            <div className='OrderListItem'>
                <div>BestellNr: {this.props.order.orderNr}</div>
                <div>Datum: {this.props.order.orderDate}</div>
                {isDetailViewOpen}
                {
                    this.state.isDetailViewOpen ? this.props.order.articles.map(orderArticle => (
                        <OrderListDetails key={orderArticle._id} orderArticle={orderArticle}/>
                    )) : null
                }
                <div>Summe: {this.props.order.articles.reduce((price, article) => price + article.price * article.quantity, 0)} Euro</div>
                <br/>
            </div>
        )
    }
}

export default OrderListItem;
