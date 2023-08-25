import { combineReducers } from "redux";
import robotsReducer from "@Redux/robots/robotsReducer";
import uiReducer from "@Redux/ui/uiReducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "robot",
  storage,
  whitelist: ["ui"],
};

const rootReducer = combineReducers({
  robots: robotsReducer,
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
