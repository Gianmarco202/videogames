import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from  "redux-devtools-extension";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

/*const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)
const store = createStore(rootReducer, composedEnhancers)*/


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;