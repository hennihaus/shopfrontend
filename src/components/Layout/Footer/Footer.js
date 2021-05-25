import "./Footer.css";
import Content from "../../UI/Content/Content";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className='Footer'>
            <Content>
                <NavLink className='Footer__Content' to='/imprint'>Impressum</NavLink>
            </Content>
        </footer>
    )
}

export default Footer;
