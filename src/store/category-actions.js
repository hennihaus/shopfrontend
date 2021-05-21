import axios from "../common/axios-url";

export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILED = 'LOAD_CATEGORIES_FAILED';
export const LOAD_SUBCATEGORIES_SUCCESS = "LOAD_SUBCATEGORIES_SUCCESS";
export const LOAD_SUBCATEGORIES_FAILED = "LOAD_SUBCATEGORIES_FAILED";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_SUBCATEGORY = "SELECT_SUBCATEGORY";

const setCategories = (categories) => {
    return {
        type: LOAD_CATEGORIES_SUCCESS,
        payload: {
            categories
        }
    };
};

const loadCategoriesFailed = () => {
    return {
        type: LOAD_CATEGORIES_FAILED
    };
};

export const loadCategories = () => {
    return dispatch => {
        axios.get('/shop/categories')
            .then(response => dispatch(setCategories(response.data)))
            .catch(error => {
                console.error(error);
                dispatch(loadCategoriesFailed())
            });
    };
};

const setSubcategories = (subcategories) => {
    return {
        type: LOAD_SUBCATEGORIES_SUCCESS,
        payload: {
            subcategories
        }
    };
};

const loadSubcategoriesFailed = () => {
    return {
        type: LOAD_SUBCATEGORIES_FAILED
    };
};

export const loadSubcategories = () => {
    return dispatch => {
        axios.get('/shop/subcategories')
            .then(response => dispatch(setSubcategories(response.data)))
            .catch(error => {
                console.error(error);
                dispatch(loadSubcategoriesFailed());
            })
    };
};

export const selectCategory = selectedCategoryId => {
    return {
        type: SELECT_CATEGORY,
        payload: {
            selectedCategoryId
        }
    };
};

export const selectSubcategory = (selectedCategoryId, selectedSubcategoryId) => {
    return {
        type: SELECT_SUBCATEGORY,
        payload: {
            selectedCategoryId,
            selectedSubcategoryId
        }
    }
}


