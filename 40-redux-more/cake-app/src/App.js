import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
