import './OrderListDetails.css';
import {connect} from "react-redux";

function OrderListDetails(props) {
    const article = props.articles.find(article => article._id === props.orderArticle.articleId);
    return (
        <div className='OrderListDetails'>
            <img src={article.href} alt={article.shortdescription}/>
            <div>{article.name}</div>
            <div>Stück: {props.orderArticle.quantity}</div>
            <div>Preis: {parseFloat(props.orderArticle.price).toFixed(2)} Euro/Stck.</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articleReducer.articles
    }
}

export default connect(mapStateToProps)(OrderListDetails);
