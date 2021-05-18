import './CommentSortButton.css';
import {commentSortOrder} from "../../../model/comment-sort-order";
import {setCommentSortOrder} from "../../../store/article-actions";
import {connect} from "react-redux";

function CommentSortButton(props) {
    return (
        <div className='CommentSortButton'>
            <label>Sortieren nach:</label>
            <select onChange={event => props.setCommentSortOrder(event.target.value)}
                    defaultValue={props.commentSortOrder}>
                <option value={commentSortOrder.DATE_ASC}>Datum aufsteigend</option>
                <option value={commentSortOrder.DATE_DESC}>Datum absteigend</option>
                <option value={commentSortOrder.RATE_ASC}>Bewertung aufsteigend</option>
                <option value={commentSortOrder.RATE_DESC}>Bewertung absteigend</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        commentSortOrder: state.articleReducer.commentSortOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCommentSortOrder: commentSortOrder => dispatch(setCommentSortOrder(commentSortOrder))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSortButton);
