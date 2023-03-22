import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from "./store";
import { ThemeContextProvider } from "./context/ThemeContext";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
