import React from "react";
import { Provider } from "react-redux";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";

import store from "./redux/store";

import "./App.css";
import configureRouter from "./router/Routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CSSReset />
        {configureRouter()}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
