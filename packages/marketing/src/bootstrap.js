import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Todo: Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Todo: If we are in development and in isolation call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");
  console.log("devRoot", devRoot);

  if (devRoot) {
    mount(devRoot);
  }
}

// Todo: we are running through container and we should export the mount function

export { mount };
