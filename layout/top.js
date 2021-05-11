import React from "../_snowpack/pkg/react.js";
import {
  ExitToApp as LogoutIcon,
  Person as UserIcon
} from "../_snowpack/pkg/@material-ui/icons.js";
const appTitle = "myapp";
export default () => {
  const menus = [
    {link: "/app/profile", Icon: UserIcon},
    {link: "/logout", Icon: LogoutIcon}
  ];
  return /* @__PURE__ */ React.createElement("p", null, "fdghjs");
};
