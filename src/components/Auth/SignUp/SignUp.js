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

    signUp = (event) => {
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

        this.props.register(userData);
    }

    render() {
        return (
            <div className='SignUp'>
                <Title>Registrieren</Title>
                <form onSubmit={event => this.signUp(event)}>
                    <fieldset>
                        <legend>Formular</legend>
                        <div className='SignUp__Formset'>
                            <label>E-Mail</label>
                            <input onChange={event => this.setState({email: event.target.value})}
                                   type='email'
                                   value={this.state.email}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Passwort</label>
                            <input onChange={event => this.setState({pw: event.target.value})} value={this.state.pw}
                                   type='password'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Vorname</label>
                            <input onChange={event => this.setState({firstname: event.target.value})}
                                   value={this.state.firstname}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Nachname</label>
                            <input onChange={event => this.setState({lastname: event.target.value})}
                                   value={this.state.lastname}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Straße</label>
                            <input onChange={event => this.setState({street: event.target.value})}
                                   value={this.state.street}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>PLZ</label>
                            <input onChange={event => this.setState({postcode: event.target.value})}
                                   value={this.state.postcode}
                                   type='number'
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Stadt</label>
                            <input onChange={event => this.setState({city: event.target.value})}
                                   value={this.state.city}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Land</label>
                            <input onChange={event => this.setState({country: event.target.value})}
                                   value={this.state.country}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='SignUp__Formset'>
                            <label>Telefon</label>
                            <input onChange={event => this.setState({phone: event.target.value})}
                                   value={this.state.phone}
                                   required
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <input className='SignUp__Submit' type='submit' value='Registrieren'/>
                    </fieldset>
                </form>
                <p>{this.props.signUpMessage}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpMessage: state.authReducer.signUpMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: userData => dispatch(register(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
