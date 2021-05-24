import {isLoggedIn} from "../../common/util";
import Auth from "../Auth/Auth";
import {Component} from "react";

class AuthWrapper extends Component {

    state = {
    }

    render() {
        let content;
        if (!isLoggedIn() && this.props.activeAuthCheck) {
            content = <Auth afterLogin={() => this.props.afterLogin()}/>
        } else if (isLoggedIn() && this.props.activeAuthCheck) {
            this.props.afterLogin();
            content = this.props.children;
        } else {
            content = this.props.children;
        }
        return (
            <>
                {content}
            </>
        )

    }
}

export default AuthWrapper;
