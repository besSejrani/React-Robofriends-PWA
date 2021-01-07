import { combineReducers } from "redux";
import searchReducer from "./robots/searchReducer";
import robotsReducer from "./robots/robotsReducer";
import uiReducer from "./ui/uiReducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "robot",
  storage,
  whitelist: ["ui"],
};

const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotsReducer,
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
