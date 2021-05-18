import './Header.css';
import Button from "../../UI/Button/Button";
import NavButton from "../../UI/NavButton/NavButton";
import {withRouter} from 'react-router-dom';
import Logout from "../../Auth/Logout/Logout";

function Header(props) {
    return (
        <header className='Header'>
            <h2 onClick={() => props.history.push('/')}>Shop</h2>
            <nav>
                <NavButton to='/'><Button>Artikel</Button></NavButton>
                <NavButton to='/orders'><Button>Bestellungen</Button></NavButton>
                <NavButton to='/signup'><Button>Registrieren</Button></NavButton>
                <NavButton to='/login'><Button>Login</Button></NavButton>
                <Logout/>
            </nav>
        </header>
    )
}

export default withRouter(Header);
