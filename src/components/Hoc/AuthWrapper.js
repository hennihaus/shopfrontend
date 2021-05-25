import {isLoggedIn} from "../../common/util";
import Auth from "../Auth/Auth";

function AuthWrapper(props) {
    if (!isLoggedIn() && props.activeAuthCheck) {
        return <Auth afterLogin={() => props.afterLogin()}/>
    } else if (isLoggedIn() && props.activeAuthCheck) {
        props.afterLogin();
        return props.children;
    } else {
        return props.children;
    }
}

export default AuthWrapper;
