import './Logout.css';
import {logout} from "../../../store/auth-actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function Logout(props) {
    const history = useHistory();
    const logout = () => {
        props.logout();
        history.push('/login');
    };
    return (
        <a href='#' className='Logout' onClick={() => logout()}>
            Logout
        </a>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
