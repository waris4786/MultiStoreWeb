import { chatReducer } from "./reducers/chatReducer";
import { tabbingReducer } from "./reducers/tabbingReducer";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// Only if you have a number of reducers:

const rootReducer = combineReducers({
  chatReducer,
  tabbingReducer,
});
// This is only for the redux dev tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
