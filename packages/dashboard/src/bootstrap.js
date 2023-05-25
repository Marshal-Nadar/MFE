import { createApp } from "vue";
import DashBoard from "./components/Dashboard.vue";

// Todo: Mount function to start up the app
const mount = (el) => {
  const app = createApp(DashBoard);
  app.mount(el);
};

// Todo: If we are in development and in isolation call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard_dev_root");
  console.log("devRoot", devRoot);

  if (devRoot) {
    mount(devRoot);
  }
}

// Todo: we are running through container and we should export the mount function

export { mount };

// npm i css-loader file-loader html-webpack-plugin node-sass sass-loader style-loader vue-loader vue-style-loader webpack webpack-cli webpack-dev-server webpack-merge
