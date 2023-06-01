import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;
