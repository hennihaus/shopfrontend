import "./Toolbar.css";
import NavButton from "../../UI/NavButton/NavButton";
import {connect} from "react-redux";

function Toolbar(props) {
    return (
        <div className='Toolbar'>
            <NavButton to='/shoppingcart'>
                &#128722; ({props.articles.reduce((articlesInShoppingCart, article) => article.selectedQuantity + articlesInShoppingCart, 0)})
            </NavButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.shoppingCartReducer.articles
    }
}

export default connect(mapStateToProps)(Toolbar);
