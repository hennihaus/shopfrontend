import './ShoppingCarts.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyArticles} from "../../store/shopping-cart-actions";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Title from "../UI/Title/Title";
import ShoppingCartSummary from "./ShoppingCartSummary/ShoppingCartSummary";
import {isLoggedIn} from "../../common/util";
import Auth from "../Auth/Auth";

function ShoppingCarts() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.shoppingCartReducer.articles);
    const [wantToBuyArticles, setWantToBuyArticles] = useState(false);

    const buy = () => {
        setWantToBuyArticles(true)
        if (articles.length && wantToBuyArticles && isLoggedIn()) {
            const boughtArticles = articles.map(article => {
                return {
                    quantity: article.selectedQuantity,
                    articleId: article._id,
                    price: article.price
                }
            });
            dispatch(buyArticles(boughtArticles));
        }
    };
    if (articles.length && wantToBuyArticles && !isLoggedIn()) {
        return <Auth afterLogin={() => buy()}/>
    }
    return (
        <section className='ShoppingCarts'>
            <div className='ShoppingCarts__Header'>
                <Title>Warenkorb</Title>
                {
                    articles.length
                        ? <ShoppingCartSummary click={() => buy()} articles={articles}/>
                        : <h1>Einkaufswagen ist leer</h1>
                }
            </div>
            <div className='ShoppingCarts__Content'>
                {
                    articles.map((article, index) => (
                        <ShoppingCart key={article._id} article={article} index={index}/>)
                    )
                }
            </div>
        </section>
    )
}

export default ShoppingCarts;
