import './CommentList.css';
import {Component} from "react";
import {loadComments} from "../../../store/article-actions";
import {connect} from "react-redux";
import CommentListItem from "../CommentListItem/CommentListItem";
import CommentSortButton from "../CommentSortButton/CommentSortButton";

class CommentList extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.articleId);
    }

    render() {
        let comments = null;
        const article = this.props.articles.find(article => article._id === this.props.articleId);
        if (article.comments) {
            comments = article.comments.map((comment, index) => (
                <CommentListItem key={index} comment={comment}/>)
            )
        }
        if (article.comments && !article.comments.length) {
            comments = <div>Keine Rezensionen vorhanden!</div>
        }
        if (article.errorLoadingComments) {
            comments = <div>Fehler beim Laden der Rezension!</div>
        }
        return (
            <div className='CommentList'>
                <h2>Rezensionen</h2>
                <CommentSortButton/>
                {comments}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
