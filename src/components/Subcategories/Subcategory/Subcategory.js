import './Subcategory.css';
import {useDispatch, useSelector} from "react-redux";
import {selectSubcategory} from "../../../store/category-actions";

function Subcategory(props) {
    const dispatch = useDispatch();
    const subcategories = useSelector(state => state.categoryReducer.subcategories);

    const handleClick = event => {
        event.stopPropagation();
        dispatch(selectSubcategory(props.categoryId, subcategories.find(subcategory => subcategory._id === props.subcategoryId)._id));
    };
    if (subcategories) {
        return <li className='Subcategory' onClick={event => handleClick(event)}>
            {subcategories.find(subcategory => subcategory._id === props.subcategoryId).name}
        </li>
    } else {
        return <></>
    }
}

export default Subcategory;
