import './Logout.css';
import {logout} from "../../../store/auth-actions";
import {connect} from "react-redux";

function Logout(props) {
    return (
        <a href='#' className='Logout' onClick={() => props.logout()}>
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
