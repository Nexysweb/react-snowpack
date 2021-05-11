import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import AppRouter from "./router.js";
import theme from "./theme.js";
import {ThemeProvider} from "./_snowpack/pkg/@material-ui/core/styles.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(ThemeProvider, {
  theme
}, /* @__PURE__ */ React.createElement(AppRouter, null)), document.getElementById("root"));
