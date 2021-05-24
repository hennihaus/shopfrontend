import './CommentForm.css';
import {useState} from "react";
import {createComment} from "../../../store/article-actions";
import {useDispatch} from "react-redux";

function CommentForm(props) {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const commentObject = {
            comment,
            rating,
            articleId: props.articleId,
            date: new Date().toLocaleDateString('de', {day: 'numeric', month: 'numeric', year: 'numeric'})
        };
        dispatch(createComment(props.articleId, commentObject));
    }
    return (
        <div className='CommentForm'>
            <h2>Rezension schreiben</h2>
            <form className='CommentForm__Form' onSubmit={event => handleSubmit(event)}>
                <fieldset>
                    <div className='CommentForm__Form__Formset'>
                        <label className='CommentForm__Form__Formset__Label'>Sterne (0-5)</label>
                        <input className='CommentForm__Form__Formset__Input'
                               type='number'
                               onChange={event => setRating(+event.target.value)}
                               value={rating}
                               required
                               min='0'
                               max='5'
                               style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                        />
                    </div>
                    <div className='CommentForm__Formset'>
                        <label className='CommentForm__Form__Formset__Label'>Kommentar</label>
                        <textarea className='CommentForm__Form__Formset__Textarea'
                                  onChange={event => setComment(event.target.value)}
                                  value={comment}
                                  required
                                  style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                        >

                            </textarea>
                    </div>
                    <input className='CommentForm__Form__Submit' type='submit' value='Absenden'/>
                </fieldset>
            </form>
            <p>{props.createCommentMessage}</p>
        </div>
    )
}

export default CommentForm;
