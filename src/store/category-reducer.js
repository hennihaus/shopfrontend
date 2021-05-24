import {updateState} from "../common/util";
import {
    LOAD_CATEGORIES_FAILED,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_SUBCATEGORIES_FAILED,
    LOAD_SUBCATEGORIES_SUCCESS,
    SELECT_CATEGORY,
    SELECT_SUBCATEGORY
} from "./category-actions";

const initialState = {
    categories: null,
    errorLoadingCategories: null,
    subcategories: null,
    errorLoadingSubcategories: null,
    selectedCategoryId: null,
    selectedSubcategoryId: null
};

const setCategories = (state, action) => updateState(state, {
    categories: [...action.payload.categories],
    errorLoadingCategories: false
});

const loadingCategoriesFailed = state => updateState(state, {
    errorLoadingCategories: true
});

const setSubcategories = (state, action) => updateState(state, {
    subcategories: [...action.payload.subcategories],
    errorLoadingSubcategories: false
});

const loadingSubcategoriesFailed = state => updateState(state, {
    errorLoadingSubcategories: true
});

const selectCategory = (state, action) => updateState(state, {
    selectedCategoryId: action.payload.selectedCategoryId,
    selectedSubcategoryId: null
});

const selectSubcategory = (state, action) => updateState(state, {
    selectedCategoryId: action.payload.selectedCategoryId,
    selectedSubcategoryId: action.payload.selectedSubcategoryId
});

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return setCategories(state, action);
        case LOAD_CATEGORIES_FAILED:
            return loadingCategoriesFailed(state, action);
        case LOAD_SUBCATEGORIES_SUCCESS:
            return setSubcategories(state, action);
        case LOAD_SUBCATEGORIES_FAILED:
            return loadingSubcategoriesFailed(state);
        case SELECT_CATEGORY:
            return selectCategory(state, action);
        case SELECT_SUBCATEGORY:
            return selectSubcategory(state, action);
        default:
            return state;
    }
};

export default categoryReducer;
