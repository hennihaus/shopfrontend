import './SubcategoryListItem.css';
import {connect} from "react-redux";
import {selectSubcategory} from "../../../store/category-actions";
import {Component} from "react";

class SubcategoryListItem extends Component {

    handleSubcategoryClick = (event, subcategoryId) => {
        event.stopPropagation();
        this.props.selectSubcategory(this.props.categoryId, subcategoryId)
    }

    render() {
        let subcategory = null;
        let filteredSubcategory;
        if (this.props.subcategories) {
            filteredSubcategory = this.props.subcategories.find(subcategory => subcategory._id === this.props.subcategoryId);
        }
        if (filteredSubcategory) {
            subcategory = <li className='SubcategoryListItem'
                              onClick={(event) => this.handleSubcategoryClick(event, filteredSubcategory._id)}>
                {filteredSubcategory.name}
            </li>
        }
        return (
            <>
                {subcategory}
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        subcategories: state.categoryReducer.subcategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectSubcategory: (selectedCategoryId, selectedSubcategoryId) => dispatch(selectSubcategory(selectedCategoryId, selectedSubcategoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryListItem);
