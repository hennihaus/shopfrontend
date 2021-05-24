import "./ArticleDetails.css";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import ArticleDetailsView from "./ArticleDetailsView/ArticleDetailsView";

function ArticleDetails() {
    const {id} = useParams();
    const articles = useSelector(state => state.articleReducer.articles);
    const errorLoadingArticles = useSelector(state => state.articleReducer.errorLoadingArticles);

    return (
        <div className='ArticleDetails'>
            {articles ? <ArticleDetailsView article={articles.find(article => article._id === id)}/> : null}
            {!articles && errorLoadingArticles ? <div>Fehler beim Laden des Artikels</div> : null}
        </div>
    )
}

export default ArticleDetails;
