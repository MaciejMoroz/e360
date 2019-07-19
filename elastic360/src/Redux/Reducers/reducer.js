import { combineReducers } from "redux/es/redux";
import productReducer from "./productReducer";

export default combineReducers({
    products: productReducer,
});
