import './Header.css';
import Content from "../../UI/Content/Content";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className='Header'>
            <Content>
                <NavLink className='Header__Logo' to='/'>E-Shop</NavLink>
            </Content>
        </header>
    )
}

export default Header;
