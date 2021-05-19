import "./Articles.css";
import {Component} from "react";
import {connect} from "react-redux";
import CategoryList from "../Categories/Categories";
import {loadArticles} from "../../store/article-actions";
import Article from "./Article/Article";

class Articles extends Component {

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        let articles = null;

        // subcategory
        if (this.props.articles && this.props.selectedCategoryId && this.props.selectedSubcategoryId) {
            articles = this.props.articles
                .filter(article => article.categoryId === this.props.selectedCategoryId)
                .filter(article => article.subcategory === this.props.selectedSubcategoryId)
                .map(article => <Article key={article._id} article={article}/>);
        }
        // category
        if (this.props.articles && this.props.selectedCategoryId && !this.props.selectedSubcategoryId) {
            articles = this.props.articles
                .filter(article => article.categoryId === this.props.selectedCategoryId)
                .map(article => <Article key={article._id} article={article}/>);
        }
        // all
        if (this.props.articles && !this.props.selectedCategoryId && !this.props.selectedSubcategoryId) {
            articles = this.props.articles.map(article => <Article key={article._id} article={article}/>);
        }
        // error
        if (this.props.errorLoadingArticles) {
            articles = <div>Fehler beim Laden der Artikel</div>
        }

        return (
            <div className='Articles'>
                <CategoryList/>
                {articles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articleReducer.articles,
        errorLoadingArticles: state.articleReducer.errorLoadingArticles,
        selectedCategoryId: state.categoryReducer.selectedCategoryId,
        selectedSubcategoryId: state.categoryReducer.selectedSubcategoryId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: () => dispatch(loadArticles())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Articles);
