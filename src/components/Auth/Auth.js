import './Auth.css';
import {Component} from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

class Auth extends Component {

    state = {
        isLoginPage: true
    }

    render() {
        let authPage;
        let alternativeButton;
        if (this.state.isLoginPage) {
            alternativeButton = <button className='Auth__Submit' onClick={() => this.setState({isLoginPage: false})}>
                Kein Account
            </button>
            authPage = <Login alternative={alternativeButton}
                              afterLogin={this.props.afterLogin ? this.props.afterLogin : null}/>
        } else {
            alternativeButton = <button className='Auth__Submit' onClick={() => this.setState({isLoginPage: true})}>
                Account vorhanden
            </button>
            authPage = <SignUp alternative={alternativeButton}
                               afterLogin={this.props.afterLogin ? this.props.afterLogin : null}/>
        }
        return (
            <div className='Auth'>
                {authPage}
            </div>
        )
    }
}

export default Auth;
