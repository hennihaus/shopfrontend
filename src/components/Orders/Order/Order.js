import './Order.css';
import {useState} from "react";
import Button from "../../UI/Button/Button";
import OrderDetails from "./OrderDetails/OrderDetails";

function Order(props) {
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
    return (
        <fieldset className='Order' onClick={() => setIsDetailViewOpen(!isDetailViewOpen)}>
            <legend>{props.order.orderDate}</legend>
            <div className='Order__Wrapper'>
                <p>Summe: {parseFloat(props.order.articles.reduce((price, article) => price + article.price * article.quantity, 0)).toFixed(2)} €</p>
                <p>
                    <span className='Order__Wrapper__Order_Nr'>Nr.:</span>
                    {props.order.orderNr}
                </p>
                {
                    isDetailViewOpen
                        ? <Button click={() => setIsDetailViewOpen(false)}>-</Button>
                        : <Button click={() => setIsDetailViewOpen(true)}>+</Button>
                }
                <div className='Order__Wrapper__Details'>
                    {
                        isDetailViewOpen
                            ? props.order.articles.map(orderArticle => (
                                <OrderDetails key={orderArticle._id} orderArticle={orderArticle}/>))
                            : null
                    }
                </div>
            </div>
        </fieldset>
    )
}

export default Order;
