import "./NavButton.css";
import {NavLink} from "react-router-dom";

function NavButton(props) {
    return (
        <NavLink className='NavButton' to={props.to}>
            {
                props.name ? props.name : props.children
            }
        </NavLink>
    )
}

export default NavButton;
