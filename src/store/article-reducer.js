import {
    COMMENT_SORT_DIRECTION,
    CREATE_COMMENT_FAILED,
    CREATE_COMMENT_SUCCESS,
    LOAD_ARTICLES_FAILED,
    LOAD_ARTICLES_SUCCESS,
    LOAD_COMMENTS_FAILED,
    LOAD_COMMENTS_SUCCESS
} from "./article-actions";
import {convertToDate, updateState} from "../common/util";
import {commentSortOrder} from "../common/model";

const initialState = {
    commentSortOrder: commentSortOrder.DATE_DESC
};

const setArticles = (state, action) => updateState(state, {
    articles: [...action.payload.articles],
    errorLoadingArticles: false
});

const loadingArticlesFailed = state => updateState(state, {
    errorLoadingArticles: true
});

const setComments = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(article => article._id === action.payload.articleId);
    const article = {...articles[index]};
    article.comments = sortComments(state.commentSortOrder, action.payload.comments);
    article.errorLoadingComments = false;
    articles[index] = article;

    return updateState(state, {
        articles
    });
};

const loadingCommentsFailed = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(article => article._id === action.payload.articleId);
    const article = {...articles[index]};
    article.errorLoadingComments = true;
    articles[index] = article;

    return updateState(state, {
        articles
    });
};

const setComment = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(article => article._id === action.payload.articleId);
    const article = {...articles[index]};
    if (article.comments) {
        article.comments = sortComments(state.commentSortOrder, [action.payload.comment, ...article.comments]);
    } else {
        article.comments = sortComments(state.commentSortOrder, [action.payload.comment]);
    }
    article.createCommentMessage = action.payload.createCommentMessage;
    articles[index] = article;

    return updateState(state, {
        articles
    });
};

const createCommentFailed = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(article => article._id === action.payload.articleId);
    const article = {...articles[index]};
    article.createCommentMessage = action.payload.createCommentMessage;
    articles[index] = article;

    return updateState(state, {
        articles
    });
};


const setCommentSortOrder = (state, action) => {
    const articles = [...state.articles];
    for (let index = 0; index < articles.length; index++) {
        if (articles[index].comments) {
            let comments = sortComments(+action.payload.commentSortOrder, state.articles[index].comments);
            const article = {...articles[index]};
            article.comments = comments;
            articles[index] = article;
        }
    }
    return updateState(state, {
        articles,
        commentSortOrder: +action.payload.commentSortOrder
    })
};

const sortComments = (order, comments) => {
    switch (order) {
        case commentSortOrder.DATE_ASC:
            return comments.sort((firstComment, secondComment) => convertToDate(firstComment.date).getTime() - convertToDate(secondComment.date).getTime());
        case commentSortOrder.DATE_DESC:
            return comments.sort((firstComment, secondComment) => convertToDate(secondComment.date).getTime() - convertToDate(firstComment.date).getTime());
        case commentSortOrder.RATE_ASC:
            return comments.sort((firstComment, secondComment) => firstComment.rating - secondComment.rating);
        case commentSortOrder.RATE_DESC:
            return comments.sort((firstComment, secondComment) => secondComment.rating - firstComment.rating);
        default:
            return comments;
    }
}

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES_SUCCESS:
            return setArticles(state, action);
        case LOAD_ARTICLES_FAILED:
            return loadingArticlesFailed(state);
        case LOAD_COMMENTS_SUCCESS:
            return setComments(state, action);
        case LOAD_COMMENTS_FAILED:
            return loadingCommentsFailed(state, action);
        case CREATE_COMMENT_SUCCESS:
            return setComment(state, action);
        case CREATE_COMMENT_FAILED:
            return createCommentFailed(state, action);
        case COMMENT_SORT_DIRECTION:
            return setCommentSortOrder(state, action);
        default:
            return state;
    }
}

export default articleReducer;
