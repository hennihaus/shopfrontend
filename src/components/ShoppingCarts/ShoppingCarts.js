import './ShoppingCarts.css';
import {Component} from "react";
import {connect} from "react-redux";
import Button from "../UI/Button/Button";
import {buyArticles} from "../../store/shopping-cart-actions";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class ShoppingCarts extends Component {

    buyArticles = () => {
        if (this.props.articles.length) {
            const articles = this.props.articles.map(article => {
                return {
                    quantity: article.selectedQuantity,
                    articleId: article._id,
                    price: article.price
                }
            });
            this.props.buyArticles(articles);
        }
    }

    render() {
        let articles;
        if (this.props.articles.length) {
            articles = this.props.articles.map((article, index) => (
                <ShoppingCart key={article._id} article={article} index={index}/>
            ))
        } else {
            articles = <div>Keine Artikel vorhanden!</div>
        }
        return (
            <section className='ShoppingCarts'>
                <h2>Warenkorb</h2>
                {articles}
                <p>Summe: {parseFloat(this.props.articles.reduce((price, article) => price += article.price * article.selectedQuantity, 0)).toFixed(2)} Euro</p>
                <Button click={() => this.buyArticles()}>Bestellen</Button>
                {
                    this.props.errorBuyingArticles ? <div>Fehler beim Kaufen der Artikel</div> : null
                }
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.shoppingCartReducer.articles,
        errorBuyingArticles: state.shoppingCartReducer.errorBuyingArticles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyArticles: articles => dispatch(buyArticles(articles))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCarts);
