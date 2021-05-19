import "./Subcategories.css";
import {Component} from "react";
import Subcategory from "./Subcategory/Subcategory";

class Subcategories extends Component {
    render() {
        return (
            <ul className='Subcategories'>
                {
                    this.props.subcategoryIds.map(subcategoryId => (
                        <Subcategory key={subcategoryId} categoryId={this.props.categoryId} subcategoryId={subcategoryId}/>
                    ))
                }
            </ul>
        )
    }
}

export default Subcategories;
