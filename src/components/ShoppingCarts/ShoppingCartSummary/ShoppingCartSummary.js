import './ShoppingCartSummary.css';
import {useSelector} from "react-redux";
import Button from "../../UI/Button/Button";

function ShoppingCartSummary(props) {
    const errorBuyingArticles = useSelector(state => state.shoppingCartReducer.errorBuyingArticles);
    return (
        <div className='ShoppingCartSummary'>
            <h1>Summe: {parseFloat(props.articles.reduce((price, article) => price + article.price * article.selectedQuantity, 0)).toFixed(2)} €</h1>
            <Button className='Button--big' click={() => props.click()}>
                Bestellen
            </Button>
            {
                errorBuyingArticles
                    ? <p>Fehler beim Kaufen der Artikel</p>
                    : null
            }
        </div>
    )
}

export default ShoppingCartSummary;
