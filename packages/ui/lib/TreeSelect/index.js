"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
require("./index.less");
function Form(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-tree"
  }, "pro-components TreeSelect");
}