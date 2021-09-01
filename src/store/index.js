import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";

import employee from "./reducers/employee.js";
import location from "./reducers/location.js";

export default createStore(
  combineReducers({
    employee,
    location,
  }),
  applyMiddleware(thunkMiddleware)
);
