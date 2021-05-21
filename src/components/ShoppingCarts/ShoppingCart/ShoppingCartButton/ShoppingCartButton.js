import './ShoppingCartButton.css';
import Button from "../../../UI/Button/Button";
import {connect} from "react-redux";
import {addToShoppingCart} from "../../../../store/shopping-cart-actions";

function ShoppingCartButton(props) {
    const articleInShoppingCart = props.articlesInShoppingCart.find(article => article._id === props.article._id);
    let button;
    if ((!articleInShoppingCart && props.article.quantity) || (articleInShoppingCart && articleInShoppingCart.selectedQuantity < props.article.quantity)) {
        button = <Button click={() => props.addToShoppingCart(props.article)}>{props.children}</Button>
    } else {
        button = <div onClick={event => event.stopPropagation()}>Ausverkauft</div>
    }
    return (
        <>
            {button}
        </>
    )
}

const mapStateToProps = state => {
    return {
        articlesInShoppingCart: state.shoppingCartReducer.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToShoppingCart: article => dispatch(addToShoppingCart(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartButton);
