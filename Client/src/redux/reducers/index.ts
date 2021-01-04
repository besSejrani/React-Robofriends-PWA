import { combineReducers } from "redux";
import search from "./search";
import robots from "./robots";

const reducers = combineReducers({
  search: search,
  robots: robots,
});

export type IAppState = ReturnType<typeof reducers>;
export default reducers;
