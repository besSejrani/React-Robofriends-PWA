import { combineReducers } from "redux";
import searchReducer from "../robots/searchReducer";
import robotsReducer from "../robots/robotsReducer";
import uiReducer from "../ui/uiReducers";

const reducers = combineReducers({
  search: searchReducer,
  robots: robotsReducer,
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof reducers>;
export default reducers;
