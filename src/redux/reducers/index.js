import {combineReducers} from "redux";

import loadReducer from "./loadReducer";
import disputesReducer from "./disputesReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  load: loadReducer,
  disputes: disputesReducer,
  error: errorReducer
})

export default rootReducer