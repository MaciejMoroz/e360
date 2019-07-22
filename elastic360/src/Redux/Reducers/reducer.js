import { combineReducers } from "redux/es/redux";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import CreditCardFormReducer from "./CreditCardFormReducer"


export default combineReducers({
    products: productReducer,
    order: orderReducer,
    CreditCard: CreditCardFormReducer
});
