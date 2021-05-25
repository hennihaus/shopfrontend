import './OrderDetails.css';
import {useSelector} from "react-redux";

function OrderDetails(props) {
    const articles = useSelector(state => state.articleReducer.articles);
    const article = articles.find(article => article._id === props.orderArticle.articleId);
    return (
        <div className='OrderDetails'>
            <img className='OrderDetails__Image'
                 src={article.href}
                 alt={article.shortdescription}
                 onError={event => event.target.src = '/assets/image_not_found.png'}
            />
            <div>
                <p>{article.name}</p>
                <p>Stück: {props.orderArticle.quantity}</p>
                <p>Preis: {parseFloat(props.orderArticle.price).toFixed(2)} €/Stck.</p>
            </div>
        </div>
    )
}

export default OrderDetails;
