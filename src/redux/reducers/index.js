import {combineReducers} from "redux";

import loadingReducer from "./loadingReducer";
import disputesReducer from "./disputesReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  disputes: disputesReducer,
  error: errorReducer
})

export default rootReducer