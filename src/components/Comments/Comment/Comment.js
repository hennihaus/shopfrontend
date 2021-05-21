import './Comment.css';
import Stars from "../../UI/Stars/Stars";

function Comment(props) {
    return (
        <div className='Comment'>
            <form className='Comment__Form'>
                <fieldset>
                    <legend>{props.comment.date}</legend>
                    <div className='Comment__Formset'>
                        <label>Sterne (0-5)</label>
                        <div className='Comment__Formset__Rating'>
                            <Stars rating={props.comment.rating}/>
                        </div>
                    </div>
                    <div className='Comment__Formset'>
                        <label>Kommentar</label>
                        <textarea disabled value={props.comment.comment}>
                            {props.comment.comment}
                        </textarea>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Comment;
