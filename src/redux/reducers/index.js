import { combineReducers } from "redux";
import listReducer from "./listReducer";
import queryReducer from "./queryReducer";

const reducers = combineReducers({
  listReducer,
  queryReducer
});

export default reducers;
