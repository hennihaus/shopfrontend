import './App.css';
import './styles/atmosphere.css';
import './styles/normalize.css';
import './styles/layout.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import ArticleList from "./components/Articles/Articles";
import ShoppingCartList from "./components/ShoppingCarts/ShoppingCarts";
import OrderList from "./components/Orders/Orders";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import {useEffect} from "react";
import {loadArticles} from "./store/article-actions";
import {connect} from "react-redux";

function App(props) {
    useEffect(() => props.loadArticles());
    const routes = (
        <Switch>
            <Route path='/' component={ArticleList} exact/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path='/orders' component={OrderList}/>
            <Route path='/shoppingcart' component={ShoppingCartList}/>
            <Route path='/articles/:id' component={ArticleDetails}/>
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
