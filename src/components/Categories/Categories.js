import './Categories.css';
import {Component} from "react";
import {loadCategories, loadSubcategories, selectSubcategory} from "../../store/category-actions";
import {connect} from "react-redux";
import Category from "./Category/Category";

class Categories extends Component {

    componentDidMount() {
        this.props.loadCategories();
        this.props.loadSubcategories();
    }

    render() {
        let categories = null;
        if (this.props.categories) {
            categories = this.props.categories.map(category => (
                <Category key={category._id} category={category}/>
            ));
        }
        if (this.props.errorLoadingCategories) {
            categories = <li>Fehler beim Laden der Kategorien!</li>
        }

        return (
            <ul className='Categories'>
                <li className='Categories__Parent'>
                    <a href='#'>Kategorien</a>
                    <ul className='Categories__Second'>
                        <li onClick={() => this.props.selectedSubcategory(null, null)}>
                            <a href='#'>Alle</a>
                        </li>
                        {categories}
                    </ul>
                </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
