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
            <fieldset className='Order' onClick={() => this.setState({isDetailViewOpen: !this.state.isDetailViewOpen})}>
                <legend>{this.props.order.orderDate}</legend>
                <div className='Order__Wrapper'>
                    <p>Summe: {parseFloat(this.props.order.articles.reduce((price, article) => price + article.price * article.quantity, 0)).toFixed(2)} €</p>
                    <p><span className='Order__Wrapper__Order_Nr'>Nr.:</span> {this.props.order.orderNr}</p>
                    {isDetailViewOpen}
                    <div className='Order__Wrapper__Details'>
                        {
                            this.state.isDetailViewOpen ? this.props.order.articles.map(orderArticle => (
                                <OrderDetails key={orderArticle._id} orderArticle={orderArticle}/>
                            )) : null
                        }
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default Order;
