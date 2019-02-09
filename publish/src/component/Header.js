"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _component = require("react-imvc/component");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withData = (0, _connect.default)(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return {
    fixedHeader: state.fixedHeader,
    showMenu: state.showMenu,
    pageTitle: state.pageTitle,
    messageCount: state.messageCount,
    showAddButton: state.showAddButton,
    onCloseMenu: handlers.handleCloseMenu,
    onOpenMenu: handlers.handleOpenMenu
  };
});

var _default = withData(Header);

exports.default = _default;

function Header(props) {
  var showMenu = props.showMenu,
      fixedHeader = props.fixedHeader,
      showAddButton = props.showAddButton,
      messageCount = props.messageCount,
      pageTitle = props.pageTitle,
      onCloseMenu = props.onCloseMenu,
      onOpenMenu = props.onOpenMenu;
  var headClassName = (0, _classnames.default)({
    show: showMenu && fixedHeader,
    "fix-header": fixedHeader,
    "no-fix": !fixedHeader
  });
  return _react.default.createElement("div", null, _react.default.createElement(PageCover, {
    if: showMenu && fixedHeader,
    onClick: onCloseMenu
  }), _react.default.createElement("header", {
    id: "hd",
    className: headClassName
  }, _react.default.createElement("div", {
    className: "nv-toolbar"
  }, _react.default.createElement(Toolbar, {
    if: fixedHeader,
    onClick: onOpenMenu
  }), _react.default.createElement("span", null, pageTitle), _react.default.createElement(Message, {
    messageCount: messageCount,
    showAddButton: showAddButton
  }))), _react.default.createElement(_Menu.default, null));
}

function PageCover(props) {
  if (!props.if) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "page-cover",
    onClick: props.onClick
  });
}

function Toolbar(props) {
  if (!props.if) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "toolbar-nav",
    onClick: props.onClick
  });
}

function Message(_ref2) {
  var messageCount = _ref2.messageCount,
      showAddButton = _ref2.showAddButton;

  if (messageCount > 0) {
    return _react.default.createElement("i", {
      className: "num"
    }, messageCount);
  }

  if (showAddButton) {
    return _react.default.createElement(_component.Link, {
      as: "i",
      className: "iconfont add-icon",
      to: "/add"
    }, "\uE60F");
  }

  return null;
}