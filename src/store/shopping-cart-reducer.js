import {updateState} from "../common/util";
import {
    ADD_TO_SHOPPING_CART,
    BUY_ARTICLES_FAILED,
    BUY_ARTICLES_SUCCESS,
    CHANGE_ARTICLE_QUANTITY,
    REMOVE_FROM_SHOPPING_CART
} from "./shopping-cart-actions";

const initialState = {
    articles: [],
    errorBuyingArticles: null
};

const addToShoppingCart = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(article => article._id === action.payload.article._id);
    if (index !== -1) {
        const article = {...articles[index]};
        const selectedQuantity = article.selectedQuantity + 1;
        if (selectedQuantity <= article.quantity) {
            article.selectedQuantity = selectedQuantity;
            articles[index] = article;
            return updateState(state, {articles});
        }
    }
    if (index === -1 && action.payload.article.quantity) {
        return updateState(state, {
            articles: [
                ...articles,
                {
                    ...action.payload.article,
                    selectedQuantity: 1
                }
            ]
        })
    }
    return updateState(state, {});
};

const removeFromShoppingCart = (state, action) => {
    const articles = [...state.articles];
    articles.splice(action.payload.index, 1);
    return updateState(state, {articles});
};

const changeArticleQuantity = (state, action) => {
    const articles = [...state.articles];
    if (action.payload.selectedQuantity === 0) {
        articles.splice(action.payload.index, 1);
        return updateState(state, {articles});
    }
    let article = {...articles[action.payload.index]};
    if (action.payload.selectedQuantity <= article.quantity) {
        article.selectedQuantity = action.payload.selectedQuantity
        articles[action.payload.index] = article;
        return updateState(state, {articles});
    }
    return updateState(state, {});
};

const setArticles = (state) => updateState(state, {
    articles: [],
    errorBuyingArticles: false
});

const buyArticlesFailed = state => updateState(state, {
    errorBuyingArticles: true
});

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            return addToShoppingCart(state, action);
        case REMOVE_FROM_SHOPPING_CART:
            return removeFromShoppingCart(state, action);
        case CHANGE_ARTICLE_QUANTITY:
            return changeArticleQuantity(state, action);
        case BUY_ARTICLES_SUCCESS:
            return setArticles(state);
        case BUY_ARTICLES_FAILED:
            return buyArticlesFailed(state);
        default:
            return state;
    }
};

export default shoppingCartReducer;
