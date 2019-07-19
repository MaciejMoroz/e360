import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../Reducers/reducer";

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
);

export default store;
