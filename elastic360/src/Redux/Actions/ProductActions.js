export const ACTION_TYPES = {
    PRODUCT_FETCH: "PRODUCT_FETCH",
    PRODUCT_FETCH_SUCCESS: "PRODUCT_FETCH_SUCCESS",
    PRODUCT_FETCH_ERROR: "PRODUCT_FETCH_ERROR"
};

export function fetchProduct(product) {
    return {
        type: ACTION_TYPES.PRODUCT_FETCH,
        product
    };
}

export function fetchProductSuccess(product) {
    return {
        type: ACTION_TYPES.PRODUCT_FETCH_SUCCESS,
        product
    };
}

export function fetchProductError() {
    return {
        type: ACTION_TYPES.PRODUCT_FETCH_ERROR
    };
}

export const getProducts = () => {
    const URL = "http://localhost:4001/products/";
    return fetch(URL, { method: "GET" }).then(response =>
        Promise.all([response, response.json()])
    );
};

export const fetchProductsWithRedux = () => {
    return dispatch => {
        dispatch(fetchProduct());
        return getProducts().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchProductSuccess(json));
            } else {
                dispatch(fetchProductError());
            }
        });
    };
};

