import "./Navbar.css";
import {connect} from "react-redux";
import Logout from "../../Auth/Logout/Logout";
import {NavLink} from "react-router-dom";
import Content from "../../UI/Content/Content";

function Navbar(props) {
    let auth;
    if (props.expiration && props.expiration >= new Date().getTime()) {
        auth = <>
            <li>
                <Logout/>
            </li>
        </>
    } else {
        if (props.expiration < new Date().getTime()) {
            window.localStorage.removeItem('expiration');
        }
        auth = <>
            <li>
                <NavLink to='/signup' activeClassName='Navbar__Main__Active'>
                    Registrieren
                </NavLink>
            </li>
            <li>
                <NavLink to='/login' activeClassName='Navbar__Main__Active'>
                    Login
                </NavLink>
            </li>
        </>
    }
    return (
        <nav className='Navbar'>
            <Content>
                <ul className='Navbar__Main'>
                    <li>
                        <NavLink to='/' exact activeClassName='Navbar__Main__Active'>
                            Artikel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/orders' activeClassName='Navbar__Main__Active'>
                            Bestellungen
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shoppingcart' activeClassName='Navbar__Main__Active'>
                            Warenkorb
                            ({props.articles.reduce((articlesInShoppingCart, article) => article.selectedQuantity + articlesInShoppingCart, 0)})
                        </NavLink>
                    </li>
                    {auth}
                </ul>
            </Content>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        expiration: state.authReducer.expiration,
        articles: state.shoppingCartReducer.articles
    };
};


export default connect(mapStateToProps)(Navbar);
