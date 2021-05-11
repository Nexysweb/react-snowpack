import React from "./_snowpack/pkg/react.js";
import {makeStyles, createStyles} from "./_snowpack/pkg/@material-ui/core/styles.js";
import Alert from "./_snowpack/pkg/@material-ui/lab/Alert.js";
const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));
export default function SimpleAlerts() {
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(Alert, {
    severity: "error"
  }, "This is an error alert — check it out!"), /* @__PURE__ */ React.createElement(Alert, {
    severity: "warning"
  }, "This is a warning alert — check it out!"), /* @__PURE__ */ React.createElement(Alert, {
    severity: "info"
  }, "This is an info alert — check it out!"), /* @__PURE__ */ React.createElement(Alert, {
    severity: "success"
  }, "This is a success alert — check it out!"));
}
