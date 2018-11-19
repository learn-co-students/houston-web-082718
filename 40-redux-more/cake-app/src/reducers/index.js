import { combineReducers } from "redux";

import cakeListReducer from "./cake-list-reducer";
import cakeDetailReducer from "./cake-detail-reducer";

const rootReducer = combineReducers({
  cakeList: cakeListReducer,
  cakeDetail: cakeDetailReducer
});

export default rootReducer;
