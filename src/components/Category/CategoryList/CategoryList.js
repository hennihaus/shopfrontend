import './CategoryList.css';
import {Component} from "react";
import {loadCategories, loadSubcategories, selectSubcategory} from "../../../store/category-actions";
import {connect} from "react-redux";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

class CategoryList extends Component {

    componentDidMount() {
        this.props.loadCategories();
        this.props.loadSubcategories();
    }

    render() {
        let categories = null;
        if (this.props.categories) {
            categories = this.props.categories.map(category => (
                <CategoryListItem key={category._id} category={category}/>
            ));
        }
        if (this.props.errorLoadingCategories) {
            categories = <li>Fehler beim Laden der Kategorien!</li>
        }

        return (
            <div className='CategoryList'>
                <ul>
                    <li onClick={() => this.props.selectedSubcategory(null, null)}>Alle Kategorien</li>
                    {categories}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        errorLoadingCategories: state.categoryReducer.errorLoadingCategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: () => dispatch(loadCategories()),
        loadSubcategories: () => dispatch(loadSubcategories()),
        selectedSubcategory: (selectedCategoryId, selectedSubcategoryId) => dispatch(selectSubcategory(selectedCategoryId, selectedSubcategoryId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
