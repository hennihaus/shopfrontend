import './Header.css';
import {Link} from "react-router-dom";
import Content from "../../UI/Content/Content";

function Header(props) {
    return (
        <header className='Header'>
            <Content>
                <div className='Header__Logo'>
                    <Link to='/'>E-Shop</Link>
                </div>
            </Content>
        </header>
    )
}

export default Header;
