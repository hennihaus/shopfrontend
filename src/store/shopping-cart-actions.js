import axios from "../common/axios-url";

export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART';
export const CHANGE_ARTICLE_QUANTITY = 'CHANGE_ARTICLE_QUANTITY';
export const BUY_ARTICLES_SUCCESS = 'BUY_ARTICLES_SUCCESS';
export const BUY_ARTICLES_FAILED = 'BUY_ARTICLES_FAILED';

export const addToShoppingCart = (article) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: {
            article
        }
    };
};

export const removeFromShoppingCart = (index) => {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: {
            index
        }
    };
};

export const changeArticleQuantity = (index, selectedQuantity) => {
    return {
        type: CHANGE_ARTICLE_QUANTITY,
        payload: {
            index,
            selectedQuantity
        }
    }
}

const setArticles = () => {
    return {
        type: BUY_ARTICLES_SUCCESS
    };
};

const buyArticlesFailed = () => {
    return {
        type: BUY_ARTICLES_FAILED
    };
};

export const buyArticles = (articles) => {
    return dispatch => {
        axios.post('/shop/order/', articles, {withCredentials: true})
            .then(() => dispatch(setArticles()))
            .catch(error => {
                console.error(error);
                dispatch(buyArticlesFailed());
            })
    };
};

