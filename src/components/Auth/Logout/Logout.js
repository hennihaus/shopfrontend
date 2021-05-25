import './Logout.css';
import {logout} from "../../../store/auth-actions";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

function Logout() {
    const dispatch = useDispatch();
    return (
        <NavLink className='Navbar__List__Item__Link' onClick={() => dispatch(logout())} to={'/login'}>
            Logout
        </NavLink>
    )
}

export default Logout;
