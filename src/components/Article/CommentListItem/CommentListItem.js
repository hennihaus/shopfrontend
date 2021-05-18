import './CommentListItem.css';
import Stars from "../../UI/Stars/Stars";

function CommentListItem(props) {
    return (
        <div className='CommentListItem'>
            <div>Datum: {props.comment.date}</div>
            <div>Rating: <Stars rating={props.comment.rating}/></div>
            <label>Kommentar:</label>
            <textarea disabled={true} value={props.comment.comment}>
                {props.comment.comment}
            </textarea>
        </div>
    )
}

export default CommentListItem;
