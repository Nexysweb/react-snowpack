import React from "./_snowpack/pkg/react.js";

import createMuiTheme from "./_snowpack/pkg/@material-ui/core/styles/createMuiTheme.js";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#5691ff",
    },
    secondary: {
      main: "#ff5691",
    },
    background: {
      default: "#f5f5f5",
    },
    success: {
      main: "#91ff56",
    },
  },
});

export default theme;
