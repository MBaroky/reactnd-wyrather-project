import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import reducer from "./reducer";
import middleware from "./middleware";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
