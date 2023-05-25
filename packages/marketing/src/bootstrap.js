import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Todo: Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }

      console.log("Container just Navigated");
    },
  };
};

// Todo: If we are in development and in isolation call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");
  console.log("devRoot", devRoot);

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// Todo: we are running through container and we should export the mount function

export { mount };
