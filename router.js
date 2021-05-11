import React from "./_snowpack/pkg/react.js";
import Top from "./layout/top.js";
import Alert from "./alert.js";
import Btn from "./button.js";
import {
  Link,
  Switch,
  Route,
  withRouter,
  Router
} from "./_snowpack/pkg/react-router-dom.js";
import * as History from "./_snowpack/pkg/history.js";
import App from "./styled.js";
const App2 = () => /* @__PURE__ */ React.createElement("p", null, "app ", /* @__PURE__ */ React.createElement(Link, {
  to: "/public"
}, "to public hello dev"));
const Public = () => /* @__PURE__ */ React.createElement("p", null, "public ", /* @__PURE__ */ React.createElement(Link, {
  to: "/app"
}, "to app"), " and some more text and hello dev really fast");
const history = History.createBrowserHistory({});
const MyRouter = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Top, null), /* @__PURE__ */ React.createElement(Alert, null), /* @__PURE__ */ React.createElement(Btn, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/app",
    component: App,
    props
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: Public,
    props
  })));
};
const R = withRouter(MyRouter);
export default () => /* @__PURE__ */ React.createElement(Router, {
  history
}, /* @__PURE__ */ React.createElement(R, null));
