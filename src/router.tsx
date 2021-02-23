import React from "react";

import {
  Link,
  Switch,
  Route,
  withRouter,
  Router,
  RouteComponentProps,
} from "react-router-dom";
import * as History from "history";

import { SnackbarProvider } from "@nexys/material-components";

import App from "./styled";

const App2 = () => (
  <p>
    app <Link to="/public">to public gfds fds</Link>
  </p>
);
const Public = () => (
  <p>
    public <Link to="/app">to app</Link> and some more text
  </p>
);

const history = History.createBrowserHistory({});

const MyRouter = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path="/app" component={App} props={props} />
      <Route path="/" component={Public} props={props} />
    </Switch>
  );
};

const R = withRouter(MyRouter);

export default () => (
  <Router history={history}>
    <R />
  </Router>
);
