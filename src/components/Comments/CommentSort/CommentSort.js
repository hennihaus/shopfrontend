import './CommentSort.css';
import {commentSortOrder} from "../../../common/model";
import {setCommentSortOrder} from "../../../store/article-actions";
import {useDispatch} from "react-redux";

function CommentSort() {
    const dispatch = useDispatch();
    return (
        <ul className='CommentSort'>
            <li className='CommentSort__List__Item'>
                <span>Sortieren</span>
                <ul className='CommentSort__List'>
                    <li className='CommentSort__List__Item'
                        onClick={() => dispatch(setCommentSortOrder(commentSortOrder.DATE_ASC))}>
                        Datum aufsteigend
                    </li>
                    <li className='CommentSort__List__Item'
                        onClick={() => dispatch(setCommentSortOrder(commentSortOrder.DATE_DESC))}>
                        Datum absteigend
                    </li>
                    <li className='CommentSort__List__Item'
                        onClick={() => dispatch(setCommentSortOrder(commentSortOrder.RATE_ASC))}>
                        Bewertung aufsteigend
                    </li>
                    <li className='CommentSort__List__Item'
                        onClick={() => dispatch(setCommentSortOrder(commentSortOrder.RATE_DESC))}>
                        Bewertung absteigend
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default CommentSort;
