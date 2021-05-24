import "./Articles.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadArticles} from "../../store/article-actions";
import Article from "./Article/Article";
import Title from "../UI/Title/Title";
import Categories from "../Categories/Categories";

function Articles() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticles())
    }, [dispatch]);
    const errorLoadingArticles = useSelector(state => state.articleReducer.errorLoadingArticles);
    const selectedCategoryId = useSelector(state => state.categoryReducer.selectedCategoryId);
    const selectedSubcategoryId = useSelector(state => state.categoryReducer.selectedSubcategoryId);
    let articles = useSelector(state => state.articleReducer.articles);

    // subcategory
    if (articles && selectedCategoryId && selectedSubcategoryId) {
        articles = articles
            .filter(article => article.categoryId === selectedCategoryId)
            .filter(article => article.subcategory === selectedSubcategoryId)
            .map(article => <Article key={article._id} article={article}/>);
    }
    // category
    if (articles && selectedCategoryId && !selectedSubcategoryId) {
        articles = articles
            .filter(article => article.categoryId === selectedCategoryId)
            .map(article => <Article key={article._id} article={article}/>);
    }
    // all
    if (articles && !selectedCategoryId && !selectedSubcategoryId) {
        articles = articles.map(article => <Article key={article._id} article={article}/>);
    }
    // error
    if (errorLoadingArticles) {
        articles = <div>Fehler beim Laden der Artikel</div>
    }

    return (
        <div className='Articles'>
            <div className='Articles__Header'>
                <Title>Artikel</Title>
                <Categories/>
            </div>
            <div className='Articles__Section'>
                {articles}
            </div>
        </div>
    )
}

export default Articles;
