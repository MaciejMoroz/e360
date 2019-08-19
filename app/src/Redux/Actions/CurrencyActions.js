export const ACTION_TYPES = {
    CURRENCY_FETCH: "CURRENCY_FETCH",
    CURRENCY_FETCH_SUCCESS: "CURRENCY_FETCH_SUCCESS",
    CURRENCY_FETCH_ERROR: "CURRENCY_FETCH_ERROR"
};

export function fetchCurrency(currency) {
    return {
        type: ACTION_TYPES.CURRENCY_FETCH,
        currency
    };
}

export function fetchCurrencySuccess(currency) {
    return {
        type: ACTION_TYPES.CURRENCY_FETCH_SUCCESS,
        currency
    };
}

export function fetchCurrencyError() {
    return {
        type: ACTION_TYPES.CURRENCY_FETCH_ERROR
    };
}

export const getCurrency = () => {
    const currencySymbol = "eur"
    const URL = `http://api.nbp.pl/api/exchangerates/rates/c/${currencySymbol}/?format=json`;
    return fetch(URL, { method: "GET" }).then(response =>
        Promise.all([response, response.json()])
    );
};

export const fetchCurrencysWithRedux = () => {
    return dispatch => {
        dispatch(fetchCurrency());
        return getCurrency().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchCurrencySuccess(json));
            } else {
                dispatch(fetchCurrencyError());
            }
        });
    };
};

