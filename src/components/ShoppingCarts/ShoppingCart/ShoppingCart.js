import './ShoppingCart.css';
import Button from "../../UI/Button/Button";
import {changeArticleQuantity, removeFromShoppingCart} from "../../../store/shopping-cart-actions";
import {connect} from "react-redux";

function ShoppingCart(props) {
    return (
        <article className='ShoppingCart'>
            <img src={props.article.href} alt={props.article.shortdescription}/>
            <div>Name: {props.article.name}</div>
            <div>Menge: {props.article.selectedQuantity}
                <Button
                    click={() => props.changeArticleQuantity(props.index, props.article.selectedQuantity - 1)}>-</Button>
                <Button
                    click={() => props.changeArticleQuantity(props.index, props.article.selectedQuantity + 1)}>+</Button>
            </div>
            {
                props.article.selectedQuantity === props.article.quantity ? <div>Kein weiteres Exemplar verfuegbar</div> : null
            }
            <div onClick={() => props.removeFromShoppingCart(props.index)}>&#128465;</div>
        </article>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeArticleQuantity: (index, selectedQuantity) => dispatch(changeArticleQuantity(index, selectedQuantity)),
        removeFromShoppingCart: index => dispatch(removeFromShoppingCart(index))
    }
}

export default connect(null, mapDispatchToProps)(ShoppingCart);
