import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import connect from 'react-imvc/hoc/connect'
import Menu from "./Menu";

const withData = connect(({ state, handlers }) => {
  return {
    fixedHeader: state.fixedHeader,
    showMenu: state.showMenu,
    pageTitle: state.pageTitle,
    messageCount: state.messageCount,
    showAddButton: state.showAddButton,
    onCloseMenu: handlers.handleCloseMenu,
    onOpenMenu: handlers.handleOpenMenu,
  }
})

export default withData(Header)

function Header(props) {
  let {
    showMenu,
    fixedHeader,
    showAddButton,
    messageCount,
    pageTitle,
    onCloseMenu,
    onOpenMenu,
  } = props;
  let headClassName = classnames({
    show: showMenu && fixedHeader,
    "fix-header": fixedHeader,
    "no-fix": !fixedHeader
  });
  
  return (
    <div>
      <PageCover if={showMenu && fixedHeader} onClick={onCloseMenu} />
      <header id="hd" className={headClassName}>
        <div className="nv-toolbar">
          <Toolbar if={fixedHeader} onClick={onOpenMenu} />
          <span>{pageTitle}</span>
          <Message messageCount={messageCount} showAddButton={showAddButton} />
        </div>
      </header>
      <Menu />
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
