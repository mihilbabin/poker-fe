import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";
import configureRouter from "./router/Routes";

const App: React.FC = () => {
  return <Provider store={store}>{configureRouter()}</Provider>;
};

export default App;
