import './App.css';
import './styles/atmosphere.css';
import './styles/normalize.css';
import './styles/layout.css';
import './styles/variables.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import {useEffect} from "react";
import {loadArticles} from "./store/article-actions";
import {connect} from "react-redux";
import Articles from "./components/Articles/Articles";
import Orders from "./components/Orders/Orders";
import ShoppingCarts from "./components/ShoppingCarts/ShoppingCarts";
import AuthRoute from "./components/Hoc/AuthRoute";
import Imprint from "./components/Imprint/Imprint";

function App(props) {
    useEffect(() => props.loadArticles());
    const routes = (
        <Switch>
            <Route path='/' component={Articles} exact/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <AuthRoute path='/orders' component={Orders}/>
            <Route path='/shoppingcart' component={ShoppingCarts}/>
            <Route path='/articles/:id' component={ArticleDetails}/>
            <Route path='/imprint' component={Imprint}/>
            <Redirect to='/'/>
        </Switch>
    );

    return (
        <Layout>
            {routes}
        </Layout>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: () => dispatch(loadArticles())
    };
};

export default connect(null, mapDispatchToProps)(App);
