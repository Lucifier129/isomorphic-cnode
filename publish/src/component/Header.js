"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("react-imvc/component");

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var showMenu = state.showMenu,
      fixedHeader = state.fixedHeader,
      showAddButton = state.showAddButton,
      messageCount = state.messageCount,
      userInfo = state.userInfo,
      location = state.location,
      pageTitle = state.pageTitle;
  var handleOpenMenu = handlers.handleOpenMenu,
      handleCloseMenu = handlers.handleCloseMenu;

  var headClassName = (0, _classnames2.default)({
    show: showMenu && fixedHeader,
    "fix-header": fixedHeader,
    "no-fix": !fixedHeader
  });
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(PageCover, { "if": showMenu && fixedHeader, onClick: handleCloseMenu }),
    _react2.default.createElement(
      "header",
      { id: "hd", className: headClassName },
      _react2.default.createElement(
        "div",
        { className: "nv-toolbar" },
        _react2.default.createElement(Toolbar, { "if": fixedHeader, onClick: handleOpenMenu }),
        _react2.default.createElement(
          "span",
          null,
          pageTitle
        ),
        _react2.default.createElement(Message, { messageCount: messageCount, showAddButton: showAddButton })
      )
    ),
    _react2.default.createElement(_Menu2.default, {
      "if": showMenu && fixedHeader,
      userInfo: userInfo,
      location: location,
      onClose: handleCloseMenu
    })
  );
}

function PageCover(props) {
  if (!props.if) {
    return null;
  }
  return _react2.default.createElement("div", { className: "page-cover", onClick: props.onClick });
}

function Toolbar(props) {
  if (!props.if) {
    return null;
  }
  return _react2.default.createElement("div", { className: "toolbar-nav", onClick: props.onClick });
}

function Message(_ref2) {
  var messageCount = _ref2.messageCount,
      showAddButton = _ref2.showAddButton;

  if (messageCount > 0) {
    return _react2.default.createElement(
      "i",
      { className: "num" },
      messageCount
    );
  }
  if (showAddButton) {
    return _react2.default.createElement(
      _component.Link,
      { as: "i", className: "iconfont add-icon", to: "/add" },
      "\uE60F"
    );
  }

  return null;
}