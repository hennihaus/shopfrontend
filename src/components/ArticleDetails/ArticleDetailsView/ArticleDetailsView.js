import "./ArticleDetailsView.css";
import ShoppingCartButton from "../../ShoppingCarts/ShoppingCart/ShoppingCartButton/ShoppingCartButton";
import Comments from "../../Comments/Comments";
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
            <div className='ArticleDetailsView__Wrapper'>
                <img className='ArticleDetailsView__Wrapper__Image'
                     onError={(event => event.target.src = '/assets/image_not_found.png')} src={props.article.href}
                     alt={props.article.shortdescription}/>
                <div className='ArticleDetailsView__Wrapper__Details'>
                    <h2>Produktdetails</h2>
                    <p>Name: {props.article.name}</p>
                    <p>Preis: {parseFloat(props.article.price).toFixed(2)} Euro</p>
                    <p>Auflager: {props.article.quantity} Stück</p>
                    <p>Bewertung: {averageRating || averageRating === 0
                        ? <Stars rating={averageRating}/>
                        : 'Keine Rezensionen'}
                    </p>
                    <ShoppingCartButton article={props.article}>In den Warenkorb</ShoppingCartButton>
                </div>
                <article className='ArticleDetailsView__Wrapper__Description'>
                    <h2>Beschreibung</h2>
                    <p>{props.article.description}</p>
                </article>
                <Comments articleId={props.article._id} createCommentMessage={props.article.createCommentMessage}/>
            </div>
        </article>
    )
}

export default ArticleDetailsView;
