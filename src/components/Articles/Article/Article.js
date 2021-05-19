import "./Article.css";
import {withRouter} from "react-router-dom";
import ShoppingCartButton from "../../ShoppingCarts/ShoppingCart/ShoppingCartButton/ShoppingCartButton";
import Stars from "../../UI/Stars/Stars";

function Article(props) {

    return (
        <div className='Article'>
            <div onClick={() => props.history.push(`articles/${props.article._id}`)}>
                <h3>{props.article.name}</h3>
                <img src={props.article.href} alt={props.article.shortdescription}/>
                <div>{props.article.rating ? <Stars rating={props.article.rating}/> : 'Keine Rezensionen'}</div>
                <div>{parseFloat(props.article.price).toFixed(2)} Euro</div>
            </div>
            <ShoppingCartButton article={props.article}>&#128722;</ShoppingCartButton>
        </div>
    )
}

export default withRouter(Article);
