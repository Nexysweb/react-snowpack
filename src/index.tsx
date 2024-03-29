import React from "react";
import ReactDOM from "react-dom";
//import CssBaseline from "@material-ui/core/CssBaseline";

import AppRouter from "./router";
import theme from "./theme";
//import * as serviceWorker from "./serviceWorker";

//import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { Theme, ThemeProvider } from "@material-ui/core/styles";

//import { ThemeProvider } from "@nexys/material-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
