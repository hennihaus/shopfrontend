import './CommentForm.css';
import {Component} from "react";
import {createComment} from "../../../store/article-actions";
import {connect} from "react-redux";
import Button from "../../UI/Button/Button";

class CommentForm extends Component {

    state = {
        rateOptions: [0, 1, 2, 3, 4, 5],
        rating: 0,
        comment: ''
    }

    createComment = () => {
        if (this.state.comment.length) {
            const comment = {
                comment: this.state.comment,
                rating: this.state.rating,
                articleId: this.props.articleId,
                date: new Date().toLocaleDateString('de', {day: 'numeric', month: 'numeric', year: 'numeric'})
            };
            this.props.createComment(this.props.articleId, comment);
        }
    }

    render() {
        return (
            <div className='CommentForm'>
                <h2>Rezension schreiben</h2>
                <label>Rating</label>
                <select onChange={(event) => this.setState({rating: +event.target.value})}>
                    {
                        this.state.rateOptions.map((rateOption, index) => <option key={index}
                                                                                  value={rateOption}>{rateOption}</option>)
                    }
                </select>
                <label>Kommentar</label>
                <textarea onChange={event => this.setState({comment: event.target.value})} value={this.state.comment}>

                </textarea>
                <Button click={() => this.createComment()}>Rezension absenden</Button>
                <div>{this.props.createCommentMessage}</div>
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
