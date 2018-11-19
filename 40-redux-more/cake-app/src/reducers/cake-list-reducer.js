const INITIAL_STATE = [
  {
    id: 1,
    name: "Cookie Monster",
    icing: true,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGunfnlvkJoZtRe-JFjQKJDGsjNaQriuKEhaGdFyiupQm4Roqv"
  },
  {
    id: 2,
    name: "Strawbry Shortcake",
    icing: false,
    url:
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps2732_MRR153791C09_23_7b.jpg"
  },
  {
    id: 3,
    name: "Carrot cake",
    icing: true,
    url:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/classic_carrot_cake_08513_16x9.jpg"
  }
];

const cakeListReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CAKE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cakeListReducer;
