import './Comments.css';
import {Component} from "react";
import {loadComments} from "../../store/article-actions";
import {connect} from "react-redux";
import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm";
import CommentSort from "./CommentSort/CommentSort";

class Comments extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.articleId);
    }

    render() {
        let comments = null;
        const article = this.props.articles.find(article => article._id === this.props.articleId);
        if (article.comments) {
            comments = article.comments.map((comment, index) => (
                <Comment key={index} comment={comment}/>)
            )
        }
        if (article.comments && !article.comments.length) {
            comments = <div>Keine Rezensionen vorhanden!</div>
        }
        if (article.errorLoadingComments) {
            comments = <div>Fehler beim Laden der Rezension!</div>
        }
        return (
            <>
                <CommentForm articleId={this.props.articleId} createCommentMessage={this.props.createCommentMessage}/>
                <div className='Comments__Header'>
                    <h2>Rezensionen { article.comments && article.comments.length ? <span>({article.comments.length})</span> : null}</h2>
                    {
                        article.comments && article.comments.length ? <CommentSort/> : null
                    }
                </div>
                <div className='Comments__Wrapper'>
                    {comments}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        commentSortOrder: state.articleReducer.commentSortOrder,
        articles: state.articleReducer.articles,
        errorLoadingComments: state.articleReducer.errorLoadingComments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadComments: articleId => dispatch(loadComments(articleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
