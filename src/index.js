import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";

// material
import { ThemeProvider } from "@material-ui/core";
import { themes } from "../src/BTRedux/BTDanhSachKhoaHoc/assets/css/My-themes";

// redux
import { Provider } from "react-redux"; // kết nối react và redux bằng provider
import { applyMiddleware, createStore, compose } from "redux"; // tạo store redux
import { rootReducers } from "./redux/main_redux/rootReducers"; // tạo store main

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // nhúng store chính vào store redux
  rootReducers, // store main
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
