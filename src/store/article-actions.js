import axios from "../common/axios-url";

export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILED = 'LOAD_ARTICLES_FAILED';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILED = 'LOAD_COMMENTS_FAILED';
export const COMMENT_SORT_DIRECTION = 'COMMENT_SORT_DIRECTION';

const setArticles = articles => {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: {
            articles
        }
    };
};

const loadArticlesFailed = () => {
    return {
        type: LOAD_ARTICLES_FAILED
    };
};

export const loadArticles = () => {
    return dispatch => {
        axios.get('/shop/articles')
            .then(response => dispatch(setArticles(response.data)))
            .catch(error => {
                console.error(error);
                dispatch(loadArticlesFailed());
            });
    };
};


const setComments = (articleId, comments) => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: {
            articleId,
            comments
        }
    };
};

const loadCommentsFailed = articleId => {
    return {
        type: LOAD_COMMENTS_FAILED,
        payload: {
            articleId
        }
    };
};

export const loadComments = articleId => {
    return dispatch => {
        axios.get(`/shop/comments/${articleId}`)
            .then(response => dispatch(setComments(articleId, response.data)))
            .catch(error => {
                console.error(error);
                dispatch(loadCommentsFailed(articleId))
            });
    };
};

const setComment = (articleId, comment, createCommentMessage) => {
    return {
        type: CREATE_COMMENT_SUCCESS,
        payload: {
            articleId,
            comment,
            createCommentMessage
        }
    };
};

const createCommentFailed = (articleId, createCommentMessage) => {
    return {
        type: CREATE_COMMENT_FAILED,
        payload: {
            articleId,
            createCommentMessage
        }
    };
};

export const createComment = (articleId, comment) => {
    return dispatch => {
        axios.post('/shop/comment', comment, {withCredentials: true})
            .then(response => dispatch(setComment(articleId, comment, response.data)))
            .catch(error => {
                console.error(error);
                dispatch(createCommentFailed(articleId, error.response.data));
            });
    };
};

export const setCommentSortOrder = commentSortOrder => {
    return {
        type: COMMENT_SORT_DIRECTION,
        payload: {
            commentSortOrder
        }
    };
};
