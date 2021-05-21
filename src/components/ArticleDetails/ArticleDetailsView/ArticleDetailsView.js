import "./ArticleDetailsView.css";
import {addToShoppingCart} from "../../../store/shopping-cart-actions";
import {connect} from "react-redux";
import ShoppingCartButton from "../../ShoppingCarts/ShoppingCart/ShoppingCartButton/ShoppingCartButton";
import CommentList from "../../Comments/Comments";
import Stars from "../../UI/Stars/Stars";
import Title from "../../UI/Title/Title";

function ArticleDetailsView(props) {
    let averageRating = null;
    if (props.article.comments) {
        averageRating = props.article.comments.reduce((newRating, comment) => newRating + comment.rating, 0);
        averageRating /= props.article.comments.length;
    } else {
        averageRating = props.article.rating;
    }
    return (
        <article className='ArticleDetailsView'>
            <Title>{props.article.name}</Title>
            <img src={props.article.href} alt={props.article.shortdescription}/>
            <div>Preis: {parseFloat(props.article.price).toFixed(2)} Euro</div>
            <div>Auflager: {props.article.quantity} Stück</div>
            <div>Bewertung: {averageRating ? <Stars rating={averageRating}/> : 'Keine Rezensionen'}</div>
            <ShoppingCartButton article={props.article}>In den Warenkorb &#128722;</ShoppingCartButton>
            <div>{props.article.description}</div>
            <CommentList articleId={props.article._id} createCommentMessage={props.article.createCommentMessage}/>
        </article>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToShoppingCart: article => dispatch(addToShoppingCart(article))
    };
};

export default connect(null, mapDispatchToProps)(ArticleDetailsView);
