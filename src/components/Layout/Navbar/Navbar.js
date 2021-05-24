import "./Navbar.css";
import {useSelector} from "react-redux";
import Logout from "../../Auth/Logout/Logout";
import {NavLink} from "react-router-dom";
import Content from "../../UI/Content/Content";

function Navbar() {
    const expiration = useSelector(state => state.authReducer.expiration);
    const articles = useSelector(state => state.shoppingCartReducer.articles);

    let auth;
    if (expiration && expiration >= new Date().getTime()) {
        auth = <>
            <li className='Navbar__List__Item'>
                <Logout/>
            </li>
        </>
    } else {
        if (expiration < new Date().getTime()) {
            window.localStorage.removeItem('expiration');
        }
        auth = <>
            <li className='Navbar__List__Item'>
                <NavLink to='/signup' className='Navbar__List__Item__Link' activeClassName='Navbar__List__Item__Link--Active'>
                    Registrieren
                </NavLink>
            </li>
            <li className='Navbar__List__Item'>
                <NavLink to='/login' className='Navbar__List__Item__Link' activeClassName='Navbar__List__Item__Link--Active'>
                    Login
                </NavLink>
            </li>
        </>
    }
    return (
        <nav className='Navbar'>
            <Content>
                <ul className='Navbar__List'>
                    <li className='Navbar__List__Item'>
                        <NavLink to='/' exact className='Navbar__List__Item__Link' activeClassName='Navbar__List__Item__Link--Active'>
                            Artikel
                        </NavLink>
                    </li>
                    <li className='Navbar__List__Item'>
                        <NavLink to='/orders' className='Navbar__List__Item__Link' activeClassName='Navbar__List__Item__Link--Active'>
                            Bestellungen
                        </NavLink>
                    </li>
                    <li className='Navbar__List__Item'>
                        <NavLink to='/shoppingcart' className='Navbar__List__Item__Link' activeClassName='Navbar__List__Item__Link--Active'>
                            Warenkorb
                            ({articles.reduce((sum, article) => article.selectedQuantity + sum, 0)})
                        </NavLink>
                    </li>
                    {auth}
                </ul>
            </Content>
        </nav>
    )
}

export default Navbar;
