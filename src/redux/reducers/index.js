import { combineReducers } from "redux";

// REDUCERS

import reducers from "./reducers";
import auth from "./auth";
const rootReducers = combineReducers({
  reducers,
  auth,
});

export default rootReducers;
