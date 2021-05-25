import './Categories.css';
import {useEffect} from "react";
import {loadCategories, loadSubcategories, selectSubcategory} from "../../store/category-actions";
import {useDispatch, useSelector} from "react-redux";
import Category from "./Category/Category";

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);
    const errorLoadingCategories = useSelector(state => state.categoryReducer.errorLoadingCategories);
    const errorLoadingSubcategories = useSelector(state => state.categoryReducer.errorLoadingSubcategories);
    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadSubcategories());
    }, [dispatch])

    if (errorLoadingCategories || errorLoadingSubcategories) {
        return <div>Fehler beim Laden der Kategorien!</div>
    }
    return (
        <ul className='Categories'>
            <li>
                <span>Kategorien</span>
                <ul className='Categories__List'>
                    <li onClick={() => dispatch(selectSubcategory(null, null))}>
                        Alle
                    </li>
                    {
                        categories
                            ? categories.map(category => <Category key={category._id} category={category}/>)
                            : null
                    }
                </ul>
            </li>
        </ul>
    );
}

export default Categories;
