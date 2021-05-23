import './CommentSort.css';
import {commentSortOrder} from "../../../common/model";
import {setCommentSortOrder} from "../../../store/article-actions";
import {connect} from "react-redux";
import {Component} from "react";

class CommentSort extends Component {

    handleClick = (event, order) => {
        event.preventDefault();
        this.props.setCommentSortOrder(order);
    }

    render() {
        return (
            <ul className='CommentSort'>
                <li>
                    <a href='#'>Sortieren</a>
                    <ul className='CommentSort__Second'>
                        <li onClick={event => this.handleClick(event, commentSortOrder.DATE_ASC)}>
                            <a href='#'>Datum aufsteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, commentSortOrder.DATE_DESC)}>
                            <a href='#'>Datum absteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, commentSortOrder.RATE_ASC)}>
                            <a href='#'>Bewertung aufsteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, commentSortOrder.RATE_DESC)}>
                            <a href='#'>Bewertung absteigend</a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCommentSortOrder: commentSortOrder => dispatch(setCommentSortOrder(commentSortOrder))
    };
};

export default connect(null, mapDispatchToProps)(CommentSort);
