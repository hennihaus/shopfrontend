import {Route, useHistory} from "react-router-dom";
import {isLoggedIn} from "../../common/util";
import Auth from "../Auth/Auth";

function AuthRoute(props) {
    const history = useHistory();
    if (!isLoggedIn()) {
        return <Auth afterLogin={() => history.push(props.path)}/>
    }
    return <Route {...props}/>
}

export default AuthRoute;
