import './CommentForm.css';
import {Component} from "react";
import {createComment} from "../../../store/article-actions";
import {connect} from "react-redux";

class CommentForm extends Component {

    state = {
        rating: 5,
        comment: ''
    }

    createComment = event => {
        event.preventDefault();
        const comment = {
            comment: this.state.comment,
            rating: this.state.rating,
            articleId: this.props.articleId,
            date: new Date().toLocaleDateString('de', {day: 'numeric', month: 'numeric', year: 'numeric'})
        };
        this.props.createComment(this.props.articleId, comment);
    }

    render() {
        return (
            <div className='CommentForm'>
                <h2>Rezension schreiben</h2>
                <form className='CommentForm__Form' onSubmit={(event) => this.createComment(event)}>
                    <fieldset>
                        <div className='CommentForm__Formset'>
                            <label>Sterne (0-5)</label>
                            <input type='number'
                                   onChange={(event) => this.setState({rating: +event.target.value})}
                                   value={this.state.rating}
                                   required
                                   min='0'
                                   max='5'
                                   style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            />
                        </div>
                        <div className='CommentForm__Formset'>
                            <label>Kommentar</label>
                            <textarea onChange={event => this.setState({comment: event.target.value})}
                                      value={this.state.comment}
                                      required
                                      style={{backgroundImage: "url(/assets/char_asterisk.svg)"}}
                            >

                            </textarea>
                        </div>
                        <input className='CommentForm__Submit' type='submit' value='Absenden'/>
                    </fieldset>
                </form>
                <p>{this.props.createCommentMessage}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: (articleId, comment) => dispatch(createComment(articleId, comment))
    };
};

export default connect(null, mapDispatchToProps)(CommentForm);
