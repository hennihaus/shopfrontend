import './Category.css';
import {useDispatch} from "react-redux";
import {selectCategory} from "../../../store/category-actions";
import Subcategories from "../../Subcategories/Subcategories";

function Category(props) {
    const dispatch = useDispatch();
    return (
        <li className='Category' onClick={() => dispatch(selectCategory(props.category._id))}>
            <span>{props.category.name}</span>
            <Subcategories categoryId={props.category._id} subcategoryIds={props.category.subcategoryIds}/>
        </li>
    );
}

export default Category;
