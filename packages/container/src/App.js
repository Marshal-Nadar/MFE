import React, { lazy, Suspense, useState } from "react";

import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
// const DashboardApp = lazy(() => import("./components/DashboardApp "));

import Progress from "./components/Progress";

// import { mount } from "marketing/MarketingApp";

// console.log(mount);

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          {/* <h1>Hi there!</h1>
        <hr /> */}
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              {/* <Route path='/dashboard' component={DashboardApp}></Route> */}
              <Route path='/' component={MarketingApp}></Route>
            </Switch>
          </Suspense>
          {/* <MarketingApp /> */}
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
