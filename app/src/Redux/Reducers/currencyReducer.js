import { ACTION_TYPES } from "../Actions/CurrencyActions";

const initState = { currency: 1, isLoading: true, isError: false };

const currencyReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CURRENCY_FETCH:
            return { initState };
        case ACTION_TYPES.CURRENCY_FETCH_SUCCESS:
            return { currency: action.currency, isLoading: false, isError: false };
        case ACTION_TYPES.CURRENCY_FETCH_ERROR:
            return { currency: null, isLoading: false, isError: true };
        default:
            return state;
    }
};
export default currencyReducer;
