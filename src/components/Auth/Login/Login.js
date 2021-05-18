import './Login.css';
import {Component} from "react";
import {login} from "../../../store/auth-actions";
import {connect} from "react-redux";
import Button from "../../UI/Button/Button";

class Login extends Component {

    state = {
        email: '',
        pw: ''
    }

    signIn = () => {
        const userData = {
            pw: this.state.pw,
            email: this.state.email
        };

        this.props.login(userData);
    }

    render() {
        return (
            <div className='Login'>
                <h2>Login</h2>
                <label>E-Mail</label>
                <input onChange={event => this.setState({email: event.target.value})} value={this.state.email}/>
                <label>Passwort</label>
                <input onChange={event => this.setState({pw: event.target.value})} value={this.state.pw}/>
                <Button click={() => this.signIn()}>Login</Button>
                <div>{this.props.signInMessage}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signInMessage: state.authReducer.signInMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: userData => dispatch(login(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
