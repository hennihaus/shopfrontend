import "./Article.css";
import {useHistory} from "react-router-dom";
import ShoppingCartButton from "../../ShoppingCarts/ShoppingCart/ShoppingCartButton/ShoppingCartButton";
import Stars from "../../UI/Stars/Stars";

function Article(props) {
    const history = useHistory();
    return (
        <article className='Article' onClick={() => history.push(`articles/${props.article._id}`)}>
            <img className='Article__Image' src={props.article.href} alt={props.article.shortdescription}
                 onError={(event => event.target.src = '/assets/image_not_found.png')}/>
            <div>
                <h2>{props.article.name}</h2>
                <p>{props.article.rating || props.article.rating === 0
                    ? <Stars rating={props.article.rating}/>
                    : 'Keine Rezensionen'}
                </p>
                <p>{parseFloat(props.article.price).toFixed(2)} €</p>
                <ShoppingCartButton article={props.article}>In den Warenkorb</ShoppingCartButton>
            </div>
        </article>
    )
}

export default Article;
