import { combineReducers } from "redux";
import search from "./search";
import robots from "./robots";

export default combineReducers({
  search: search,
  robots: robots,
});
