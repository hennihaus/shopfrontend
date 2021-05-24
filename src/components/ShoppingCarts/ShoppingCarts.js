import './ShoppingCarts.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyArticles} from "../../store/shopping-cart-actions";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Title from "../UI/Title/Title";
import AuthWrapper from "../Hoc/AuthWrapper";
import ShoppingCartSummary from "./ShoppingCartSummary/ShoppingCartSummary";

function ShoppingCarts() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.shoppingCartReducer.articles);
    const [activeAuthCheck, setActiveAuthCheck] = useState(false);


    const buy = () => {
        if (articles.length) {
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
    return (
        <AuthWrapper activeAuthCheck={activeAuthCheck} afterLogin={() => buy()}>
            <section className='ShoppingCarts'>
                <div className='ShoppingCarts__Header'>
                    <Title>Warenkorb</Title>
                    {
                        articles.length
                            ? <ShoppingCartSummary click={() => setActiveAuthCheck(true)} articles={articles}/>
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
        </AuthWrapper>
    )
}

export default ShoppingCarts;
