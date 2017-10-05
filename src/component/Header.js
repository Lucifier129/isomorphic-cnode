import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import Menu from "./Menu";

export default function Header({ state, handlers }) {
  let {
    showMenu,
    fixedHeader,
    showAddButton,
    messageCount,
    userInfo,
    location,
    pageTitle
  } = state;
  let { handleOpenMenu, handleCloseMenu } = handlers;
  let headClassName = classnames({
    show: showMenu && fixedHeader,
    "fix-header": fixedHeader,
    "no-fix": !fixedHeader
  });
  
  return (
    <div>
      <PageCover if={showMenu && fixedHeader} onClick={handleCloseMenu} />
      <header id="hd" className={headClassName}>
        <div className="nv-toolbar">
          <Toolbar if={fixedHeader} onClick={handleOpenMenu} />
          <span>{pageTitle}</span>
          <Message messageCount={messageCount} showAddButton={showAddButton} />
        </div>
      </header>
      <Menu if={showMenu && fixedHeader} state={state} handlers={handlers} />
    </div>
  );
}

function PageCover(props) {
  if (!props.if) {
    return null;
  }
  return <div className="page-cover" onClick={props.onClick} />;
}

function Toolbar(props) {
  if (!props.if) {
    return null;
  }
  return <div className="toolbar-nav" onClick={props.onClick} />;
}

function Message({ messageCount, showAddButton }) {
  if (messageCount > 0) {
    return <i className="num">{messageCount}</i>;
  }
  if (showAddButton) {
    return (
      <Link as="i" className="iconfont add-icon" to={`/add`}>
        &#xe60f;
      </Link>
    );
  }

  return null;
}
