import "./Navbar.css";
import {connect} from "react-redux";
import Logout from "../../Auth/Logout/Logout";
import {NavLink} from "react-router-dom";
import Content from "../../UI/Content/Content";

function Navbar(props) {
    return (
        <nav className='Navbar'>
            <Content>
                <ul className='Navbar__Main'>
                    <li>
                        <NavLink to='/'>
                            Artikel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/orders'>
                            Bestellungen
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shoppingcart'>
                            Warenkorb
                            ({props.articles.reduce((articlesInShoppingCart, article) => article.selectedQuantity + articlesInShoppingCart, 0)})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>
                            Registrieren
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <Logout/>
                    </li>
                </ul>
            </Content>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.shoppingCartReducer.articles
    };
};


export default connect(mapStateToProps)(Navbar);
