import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
export default ({ history, onSignIn }) => {
  console.log("history", history);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Route path='/auth/signin'>
          <SignIn onSignIn={onSignIn} />
        </Route>
        <Route path='/auth/signup'>
          <SignUp onSignIn={onSignIn} />
        </Route>
      </Router>
    </StylesProvider>
  );
};
