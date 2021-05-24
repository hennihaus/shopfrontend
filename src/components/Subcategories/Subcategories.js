import "./Subcategories.css";
import Subcategory from "./Subcategory/Subcategory";

function Subcategories(props) {
    return (
        <ul className='Subcategories'>
            {
                props.subcategoryIds.map(subcategoryId => (
                    <Subcategory key={subcategoryId} categoryId={props.categoryId} subcategoryId={subcategoryId}/>
                ))
            }
        </ul>
    )
}

export default Subcategories;
