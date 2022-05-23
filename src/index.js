import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";

import mainSaga from "./redux/mainSaga";
import mainStateReducer from "./redux/mainState"


const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    main: mainStateReducer,
  },
  middleware: [saga],
});

saga.run(mainSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
