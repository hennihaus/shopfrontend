import './Logout.css';
import {logout} from "../../../store/auth-actions";
import {connect} from "react-redux";
import Button from "../../UI/Button/Button";

function Logout(props) {
    return (
        <Button className='Logout' click={() => props.logout()}>
            Logout
        </Button>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
