import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";

function reducer(state = {}, action) {
  console.log("======", state, action);
  switch (action.type) {
    // case "INCREMENT_COUNT":
    //   return {
    //     ...state,
    //     count: action.payload.count
    //   };
    case "ADD_CAKE":
      return {
        ...state,
        cakeList: [...state.cakeList, action.payload]
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  cakeList: [
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
  ]
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// setTimeout(() => {
//   store.dispatch({
//     type: "INCREMENT_COUNT",
//     payload: {
//       count: store.getState().count + 1
//     }
//   });
// }, 3000);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ padding: 50 }}>
            <Route path="/" exact component={CakeList} />
            <Route path="/cake/:id" component={CakeDetail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;
