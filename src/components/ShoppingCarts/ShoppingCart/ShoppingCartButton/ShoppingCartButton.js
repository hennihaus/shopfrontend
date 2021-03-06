import './ShoppingCartButton.css';
import Button from "../../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addToShoppingCart} from "../../../../store/shopping-cart-actions";

function ShoppingCartButton(props) {
    const dispatch = useDispatch();
    const articlesInShoppingCart = useSelector(state => state.shoppingCartReducer.articles);

    const articleInShoppingCart = articlesInShoppingCart.find(article => article._id === props.article._id);
    let button;
    if ((!articleInShoppingCart && props.article.quantity) || (articleInShoppingCart && articleInShoppingCart.selectedQuantity < props.article.quantity)) {
        button = <Button click={() => dispatch(addToShoppingCart(props.article))}>{props.children}</Button>
    } else {
        button = <div onClick={event => event.stopPropagation()}>Ausverkauft</div>
    }
    return (
        <>
            {button}
        </>
    )
}

export default ShoppingCartButton;
