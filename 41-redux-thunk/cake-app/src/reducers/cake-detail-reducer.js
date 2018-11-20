const cakeDetailReducer = function(state = {}, action) {
  switch (action.type) {
    case "SET_CAKE":
      return action.payload.cake;
    default:
      return state;
  }
};

export default cakeDetailReducer;
