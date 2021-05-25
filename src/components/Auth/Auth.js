import './Auth.css';
import {useState} from "react";
import Login from "./Login/Login";
import Button from "../UI/Button/Button";
import SignUp from "./SignUp/SignUp";

function Auth(props) {
    const [isLogin, setIsLogin] = useState(true);
    if (isLogin) {
        const button = <Button className='Button--form' click={() => setIsLogin(false)}>Kein Account</Button>;
        return <Login alternative={button} afterLogin={props.afterLogin ? props.afterLogin : null}/>
    } else {
        const button = <Button className='Button--form' click={() => setIsLogin(true)}>Account vorhanden</Button>;
        return <SignUp alternative={button} afterLogin={props.afterLogin ? props.afterLogin : null}/>
    }
}

export default Auth;
