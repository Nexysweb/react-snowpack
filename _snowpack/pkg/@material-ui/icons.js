import { r as react } from '../common/index-b5a56d46.js';
import { _ as _extends } from '../common/extends-7477639a.js';
import { S as SvgIcon } from '../common/SvgIcon-24dd689d.js';
import '../common/_commonjsHelpers-913f9c4a.js';
import '../common/withStyles-1b2916cd.js';
import '../common/inheritsLoose-c86d473e.js';
import '../common/index-9a858da8.js';
import '../common/hoist-non-react-statics.cjs-3f14c29b.js';
import '../common/spacing-fbdb7fec.js';
import '../common/capitalize-b5bd7755.js';

function createSvgIcon(path, displayName) {
  var Component = react.memo(react.forwardRef(function (props, ref) {
    return react.createElement(SvgIcon, _extends({
      ref: ref
    }, props), path);
  }));

  Component.muiName = SvgIcon.muiName;
  return Component;
}

var ExitToApp = createSvgIcon(react.createElement("path", {
  d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}));

var Person = createSvgIcon(react.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}));

export { ExitToApp, Person };
