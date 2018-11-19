export function addCake(event) {
  event.preventDefault();

  return {
    type: "ADD_CAKE",
    payload: {
      id: 4,
      name: event.target.name.value,
      icing: event.target.icing.value
    }
  };
}

export function cakeClick(cake) {
  return {
    type: "SET_CAKE",
    payload: {
      cake
    }
  };
}
