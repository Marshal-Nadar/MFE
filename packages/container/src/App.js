import React from "react";
import MarketingApp from "./components/MarketingApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// import { mount } from "marketing/MarketingApp";

// console.log(mount);

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          {/* <h1>Hi there!</h1>
        <hr /> */}
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
