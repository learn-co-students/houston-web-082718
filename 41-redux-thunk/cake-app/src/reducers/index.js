import { combineReducers } from "redux";

import cakeListReducer from "./cake-list-reducer";
import cakeDetailReducer from "./cake-detail-reducer";
import cakeRecipesBooksReducer from "./cake-recipes-books-reducer";

const rootReducer = combineReducers({
  cakeList: cakeListReducer,
  cakeDetail: cakeDetailReducer,
  cakeRecipesBooks: cakeRecipesBooksReducer
});

export default rootReducer;
