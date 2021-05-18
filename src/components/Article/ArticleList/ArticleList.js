import "./ArticleList.css";
import {Component} from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import {connect} from "react-redux";
import CategoryList from "../../Category/CategoryList/CategoryList";
import {loadArticles} from "../../../store/article-actions";

class ArticleList extends Component {

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
                .map(article => <ArticleListItem key={article._id} article={article}/>);
        }
        // category
        if (this.props.articles && this.props.selectedCategoryId && !this.props.selectedSubcategoryId) {
            articles = this.props.articles
                .filter(article => article.categoryId === this.props.selectedCategoryId)
                .map(article => <ArticleListItem key={article._id} article={article}/>);
        }
        // all
        if (this.props.articles && !this.props.selectedCategoryId && !this.props.selectedSubcategoryId) {
            articles = this.props.articles.map(article => <ArticleListItem key={article._id} article={article}/>);
        }
        // error
        if (this.props.errorLoadingArticles) {
            articles = <div>Fehler beim Laden der Artikel</div>
        }

        return (
            <div className='ArticleList'>
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


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
