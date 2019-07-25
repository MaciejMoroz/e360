import { combineReducers } from "redux/es/redux";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import CreditCardFormReducer from "./CreditCardFormReducer"
import languageReducer from "./LanguageReducer"
import currencyReducer from "./currencyReducer"

export default combineReducers({
    products: productReducer,
    order: orderReducer,
    CreditCard: CreditCardFormReducer,
    language: languageReducer,
    currency: currencyReducer
});
