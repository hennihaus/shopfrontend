import "./SubcategoryList.css";
import {Component} from "react";
import SubcategoryListItem from "../SubcategoryListItem/SubcategoryListItem";

class SubcategoryList extends Component {
    render() {
        return (
            <ul className='SubcategoryList'>
                {
                    this.props.subcategoryIds.map(subcategoryId => (
                        <SubcategoryListItem key={subcategoryId} categoryId={this.props.categoryId} subcategoryId={subcategoryId}/>
                    ))
                }
            </ul>
        )
    }
}

export default SubcategoryList;
