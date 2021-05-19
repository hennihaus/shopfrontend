import './Category.css';
import {connect} from "react-redux";
import {selectCategory} from "../../../store/category-actions";
import {Component} from "react";
import Subcategories from "../../Subcategories/Subcategories";

class Category extends Component {

    render() {
        return (
            <li className='Category' onClick={() => this.props.selectCategory(this.props.category._id)}>
                {this.props.category.name}
                {
                    this.props.errorLoadingSubcategories ? null :
                        <Subcategories categoryId={this.props.category._id}
                                       subcategoryIds={this.props.category.subcategoryIds}/>
                }
            </li>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorLoadingSubcategories: state.categoryReducer.errorLoadingSubcategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectCategory: selectedCategoryId => dispatch(selectCategory(selectedCategoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
