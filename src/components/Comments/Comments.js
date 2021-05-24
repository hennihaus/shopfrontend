import './Comments.css';
import {useEffect} from "react";
import {loadComments} from "../../store/article-actions";
import {useDispatch, useSelector} from "react-redux";
import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm";
import CommentSort from "./CommentSort/CommentSort";

function Comments(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadComments(props.articleId));
    }, [dispatch, props.articleId])
    const articles = useSelector(state => state.articleReducer.articles);
    const article = articles.find(article => article._id === props.articleId);

    return (
        <>
            <CommentForm articleId={props.articleId} createCommentMessage={props.createCommentMessage}/>
            <div className='Comments__Header'>
                <h2>Rezensionen
                    {
                        article.comments && article.comments.length
                            ? <span>({article.comments.length})</span>
                            : null
                    }
                </h2>
                {
                    article.comments && article.comments.length
                        ? <CommentSort/>
                        : null
                }
            </div>
            <div className='Comments__Wrapper'>
                {
                    article.comments
                        ? article.comments.map((comment, index) => <Comment key={index} comment={comment}/>)
                        : null
                }
                {
                    article.comments && !article.comments.length
                        ? <div>Keine Rezensionen vorhanden</div>
                        : null
                }
                {
                    !article.comments && article.errorLoadingComments
                        ? <div>Fehler beim Laden der Rezension</div>
                        : null
                }
            </div>
        </>
    )
}

export default Comments;
