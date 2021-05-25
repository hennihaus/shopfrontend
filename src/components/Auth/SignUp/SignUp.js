import './SignUp.css';
import {Component} from "react";
import {register} from "../../../store/auth-actions";
import {connect} from "react-redux";
import Title from "../../UI/Title/Title";

class SignUp extends Component {

    state = {
        pw: '',
        firstname: '',
        lastname: '',
        street: '',
        postcode: '',
        city: '',
        country: '',
        phone: '',
        email: ''
    }

    signUp = async (event) => {
        event.preventDefault();
        const userData = {
            pw: this.state.pw,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            street: this.state.street,
            postcode: this.state.postcode,
            city: this.state.city,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email
        };
        await this.props.register(userData);
        if (this.props.afterLogin && this.props.signUpSuccess) {
            this.props.afterLogin();
        }
    }

    render() {
        return (
            <div className='SignUp'>
                <Title>Registrieren</Title>
                <form onSubmit={event => this.signUp(event)}>
                    <fieldset>
                        <legend>Formular</legend>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>E-Mail</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({email: event.target.value})}
                                   type='email'
                                   value={this.state.email}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Passwort</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({pw: event.target.value})} value={this.state.pw}
                                   type='password'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Vorname</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({firstname: event.target.value})}
                                   value={this.state.firstname}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Nachname</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({lastname: event.target.value})}
                                   value={this.state.lastname}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Straße</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({street: event.target.value})}
                                   value={this.state.street}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>PLZ</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({postcode: event.target.value})}
                                   value={this.state.postcode}
                                   type='number'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Stadt</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({city: event.target.value})}
                                   value={this.state.city}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Land</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({country: event.target.value})}
                                   value={this.state.country}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label className='SignUp__Formset__Label'>Telefon</label>
                            <input className='SignUp__Formset__Input'
                                   onChange={event => this.setState({phone: event.target.value})}
                                   value={this.state.phone}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Options'>
                            {this.props.alternative ? this.props.alternative : null}
                            <input className='SignUp__Options__Submit' type='submit' value='Registrieren'/>
                        </div>
                    </fieldset>
                </form>
                <p>{this.props.signUpMessage}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpSuccess: state.authReducer.signUpSuccess,
        signUpMessage: state.authReducer.signUpMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: async userData => dispatch(register(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
