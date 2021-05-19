import "./ArticleDetails.css";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import ArticleDetailsView from "./ArticleDetailsView/ArticleDetailsView";

function ArticleDetails(props) {
    let article = null;
    const {id} = useParams();
    if (props.articles) {
        article = <ArticleDetailsView article={props.articles.find(article => article._id === id)}/>
    }
    if (props.errorLoadingArticles) {
        article = <div>Fehler beim Laden des Artikels</div>
    }

    return (
        <div className='ArticleDetails'>
            {article}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articleReducer.articles,
        errorLoadingArticles: state.articleReducer.errorLoadingArticles,
    };
};

export default connect(mapStateToProps)(ArticleDetails);
