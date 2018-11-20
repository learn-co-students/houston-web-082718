export const SET_BOOKS = "cakeRecipesBooks:setBooks";
export const SET_BOOKS_REQUEST = "cakeRecipesBooks:setBooks_REQUEST";
export const SET_BOOKS_SUCCESS = "cakeRecipesBooks:setBooks_SUCCESS";
export const SET_BOOKS_ERROR = "cakeRecipesBooks:setBooks_ERROR";

// function createClient(method, url, prefix, dispatch) {
//   fetch
// }

export function setBooks(books) {
  // return {
  //   type: SET_BOOKS,
  //   payload: {
  //     books
  //   }
  // };

  return dispatch => {
    dispatch({
      type: SET_BOOKS_REQUEST
    });

    fetch("https://www.googleapis.com/books/v1/volumes?q=cake+recipes")
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: SET_BOOKS_SUCCESS,
          payload: {
            books: response.items
          }
        });
      })
      .catch(error => {
        dispatch({
          type: SET_BOOKS_ERROR,
          payload: {
            error
          }
        });
      });
  };
}

// function addNumbers(a, b) {
//   return a + b;
// }

// addNumbers(2, 5);

// addNumbers(2)(5);
