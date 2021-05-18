import './SignUp.css';
import {Component} from "react";
import {register} from "../../../store/auth-actions";
import Button from "../../UI/Button/Button";
import {connect} from "react-redux";

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

    signUp = () => {
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
                <h2>Registrieren</h2>
                <label>E-Mail</label>
                <input onChange={event => this.setState({email: event.target.value})} value={this.state.email}/>
                <label>Passwort</label>
                <input onChange={event => this.setState({pw: event.target.value})} value={this.state.pw}/>
                <label>Vorname</label>
                <input onChange={event => this.setState({firstname: event.target.value})} value={this.state.firstname}/>
                <label>Nachname</label>
                <input onChange={event => this.setState({lastname: event.target.value})} value={this.state.lastname}/>
                <label>Straße</label>
                <input onChange={event => this.setState({street: event.target.value})} value={this.state.street}/>
                <label>PLZ</label>
                <input onChange={event => this.setState({postcode: event.target.value})} value={this.state.postcode}/>
                <label>Stadt</label>
                <input onChange={event => this.setState({city: event.target.value})} value={this.state.city}/>
                <label>Land</label>
                <input onChange={event => this.setState({country: event.target.value})} value={this.state.country}/>
                <label>Telefon</label>
                <input onChange={event => this.setState({phone: event.target.value})} value={this.state.phone}/>
                <Button click={() => this.signUp()}>Registieren</Button>
                <div>{this.props.signUpMessage}</div>
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
