import { ACTION_TYPES } from "../Actions/ProductActions";

const initState = { products: null, isLoading: true, isError: false };

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.PRODUCT_FETCH:
            return { ...initState };
        case ACTION_TYPES.PRODUCT_FETCH_SUCCESS:
            return { products: action.product, isLoading: false, isError: false };
        case ACTION_TYPES.PRODUCT_FETCH_ERROR:
            return { products: null, isLoading: false, isError: true };
        default:
            return state;
    }
};
export default productReducer;
