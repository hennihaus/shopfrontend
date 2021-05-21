import './Subcategory.css';
import {connect} from "react-redux";
import {selectSubcategory} from "../../../store/category-actions";
import {Component} from "react";

class Subcategory extends Component {

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
            subcategory = <li className='Subcategory'
                              onClick={(event) => this.handleSubcategoryClick(event, filteredSubcategory._id)}>
                <a href='#'>
                    {filteredSubcategory.name}
                </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);
