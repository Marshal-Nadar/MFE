import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin' component={SignIn}></Route>
          <Route path='/auth/signup' component={SignUp}></Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
