"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("rxjs");

var _reactRedux = require("react-redux");

var _Store = require("./Store");

var _serverContainer = require("./Container/serverContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _Store.configureStore)();

_reactDom2.default.render(_react2.default.createElement(
  View,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement("div", { component: _serverContainer.serverContainer })
  )
), document.getElementById('root'));