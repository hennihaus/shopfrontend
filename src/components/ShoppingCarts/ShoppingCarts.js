import './ShoppingCarts.css';
import {Component} from "react";
import {connect} from "react-redux";
import {buyArticles} from "../../store/shopping-cart-actions";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Title from "../UI/Title/Title";
import AuthWrapper from "../Hoc/AuthWrapper";

class ShoppingCarts extends Component {

    state = {
        activeAuthCheck: false
    }

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
        }
        return (
            <AuthWrapper activeAuthCheck={this.state.activeAuthCheck} afterLogin={() => this.buyArticles()}>
                <section className='ShoppingCarts'>
                    <div className='ShoppingCarts__Header'>
                        <Title>Warenkorb</Title>
                        {
                            this.props.articles.length ? <div>
                                <h1>Summe: {parseFloat(this.props.articles.reduce((price, article) => price + article.price * article.selectedQuantity, 0)).toFixed(2)} €</h1>
                                <button className='ShoppingCarts__Header__Button'
                                        onClick={() => this.setState({activeAuthCheck: true})}>Bestellen
                                </button>
                                {
                                    this.props.errorBuyingArticles ? <p>Fehler beim Kaufen der Artikel</p> : null
                                }
                            </div> : <h1>Einkaufswagen ist leer</h1>
                        }
                    </div>
                    <div className='ShoppingCarts__Section'>
                        {articles}
                    </div>
                </section>
            </AuthWrapper>
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
