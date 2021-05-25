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

    signIn = async (event) => {
        event.preventDefault();
        const userData = {
            pw: this.state.pw,
            email: this.state.email
        };
        await this.props.login(userData);
        if (this.props.afterLogin && this.props.signInSuccess) {
            this.props.afterLogin();
        }
    }

    render() {
        return (
            <div className='Login'>
                <Title>Login</Title>
                <form onSubmit={event => this.signIn(event)}>
                    <fieldset>
                        <legend>Formular</legend>
                        <div className='Login__Formset'>
                            <label className='Login__Formset__Label'>E-Mail</label>
                            <input className='Login__Formset__Input'
                                   onChange={event => this.setState({email: event.target.value})}
                                   value={this.state.email}
                                   placeholder='Ihre E-Mail'
                                   type='email'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='Login__Formset'>
                            <label className='Login__Formset__Label'>Passwort</label>
                            <input className='Login__Formset__Input'
                                   onChange={event => this.setState({pw: event.target.value})}
                                   value={this.state.pw}
                                   placeholder='Ihr Passwort'
                                   type='password'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='Login__Options'>
                            {this.props.alternative ? this.props.alternative : null}
                            <input className='Login__Options__Submit' type='submit' value='Login'/>
                        </div>
                    </fieldset>
                </form>
                <p>{this.props.signInMessage}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signInSuccess: state.authReducer.signInSuccess,
        signInMessage: state.authReducer.signInMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: async userData => dispatch(login(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
