import { createStore, applyMiddleware } from "redux";

// THUNK --- ASYNC LIBRARY
import thunk from "redux-thunk";

// COMBINED REDUCERS
import rootReducers from "./reducers/index";
// FOR DEVELOPMENT
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...[thunk]))
);

export default store;
