import './Login.css';
import {Component} from "react";
import {login} from "../../../store/auth-actions";
import {connect} from "react-redux";
import Title from "../../UI/Title/Title";

class Login extends Component {

    state = {
        email: '',
        pw: ''
    }

    signIn = (event) => {
        event.preventDefault();
        const userData = {
            pw: this.state.pw,
            email: this.state.email
        };
        this.props.login(userData);
    }

    render() {
        return (
            <div className='Login'>
                <Title>Login</Title>
                <form onSubmit={event => this.signIn(event)}>
                    <fieldset>
                        <legend>Formular</legend>
                        <div className='Login__Formset'>
                            <label>E-Mail</label>
                            <input onChange={event => this.setState({email: event.target.value})}
                                   value={this.state.email}
                                   placeholder='Ihre E-Mail'
                                   type='email'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='Login__Formset'>
                            <label>Passwort</label>
                            <input onChange={event => this.setState({pw: event.target.value})}
                                   value={this.state.pw}
                                   placeholder='Ihr Passwort'
                                   type='password'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <input className='Login__Submit' type='submit' value='Login'/>
                    </fieldset>
                </form>
                <p>{this.props.signInMessage}</p>
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
