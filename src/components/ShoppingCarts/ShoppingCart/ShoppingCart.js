import './ShoppingCart.css';
import Button from "../../UI/Button/Button";
import {changeArticleQuantity, removeFromShoppingCart} from "../../../store/shopping-cart-actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

function ShoppingCart(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <article className='ShoppingCart' onClick={() => history.push(`articles/${props.article._id}`)}>
            <img className='ShoppingCart__Image'
                 src={props.article.href}
                 alt={props.article.shortdescription}
                 onError={event => event.target.src = '/assets/image_not_found.png'}/>
            <div>
                <h2>{props.article.name}</h2>
                <p>Preis/Stück: {parseFloat(props.article.price).toFixed(2)} Euro</p>
                <p>Menge: {props.article.selectedQuantity} {props.article.selectedQuantity === props.article.quantity ? '(Max.)' : null}</p>
                <Button click={() => dispatch(removeFromShoppingCart(props.index))}>Entfernen</Button>
                <Button click={() => dispatch(changeArticleQuantity(props.index, props.article.selectedQuantity - 1))}>-</Button>
                <Button click={() => dispatch(changeArticleQuantity(props.index, props.article.selectedQuantity + 1))}>+</Button>
            </div>
        </article>
    )
}

export default ShoppingCart;
