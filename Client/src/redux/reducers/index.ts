import { combineReducers } from "redux";
import search from "./search";
import robots from "./robots";
import uiReducer from "../ui/uiReducers";

const reducers = combineReducers({
  search: search,
  robots: robots,
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof reducers>;
export default reducers;
