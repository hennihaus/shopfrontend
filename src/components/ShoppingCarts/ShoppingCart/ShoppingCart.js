import './ShoppingCart.css';
import Button from "../../UI/Button/Button";
import {changeArticleQuantity, removeFromShoppingCart} from "../../../store/shopping-cart-actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function ShoppingCart(props) {
    return (
        <article className='ShoppingCart'  onClick={() => props.history.push(`articles/${props.article._id}`)}>
            <img className='ShoppingCart__Image' src={props.article.href} alt={props.article.shortdescription} onError={event => event.target.src = '/assets/image_not_found.png'}/>
            <div>
                <h2>{props.article.name}</h2>
                <p>Preis/Stück: {parseFloat(props.article.price).toFixed(2)} Euro</p>
                <p>Menge: {props.article.selectedQuantity} {props.article.selectedQuantity === props.article.quantity ? '(Max.)' : null}</p>
                <Button click={() => props.removeFromShoppingCart(props.index)}>Entfernen</Button>
                <Button click={() => props.changeArticleQuantity(props.index, props.article.selectedQuantity - 1)}>-</Button>
                <Button click={() => props.changeArticleQuantity(props.index, props.article.selectedQuantity + 1)}>+</Button>
            </div>
        </article>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeArticleQuantity: (index, selectedQuantity) => dispatch(changeArticleQuantity(index, selectedQuantity)),
        removeFromShoppingCart: index => dispatch(removeFromShoppingCart(index))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(ShoppingCart));
