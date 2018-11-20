import {
  SET_BOOKS_REQUEST,
  SET_BOOKS_SUCCESS
} from "../actions/cake-recipes-books";

const INITIAL_STATE = {
  loading: false,
  books: []
};

const cakeRecipesBooksReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        loading: false
      };
    default:
      return state;
  }
};

export default cakeRecipesBooksReducer;
