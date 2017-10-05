import React from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import connect from 'react-imvc/hoc/connect'
import UserInfo from "./UserInfo";

const withData = connect(({ state, handlers }) => {
  return {
    showMenu: state.showMenu,
    onClose: handlers.handleCloseMenu,
  }
})

export default withData(Menu)

function Menu(props) {
  let className = classnames({
    "nav-list": true,
    show: props.showMenu
  });

  return (
    <section
      id="sideBar"
      className={className}
      onClick={props.onClose}
    >
      <UserInfo />
      <ul className="list-ul">
        <LinkWithCheck className="icon-quanbu iconfont" to={`/list?tab=all`}>
          全部
        </LinkWithCheck>
        <LinkWithCheck className="icon-hao iconfont" to={`/list?tab=good`}>
          精华
        </LinkWithCheck>
        <LinkWithCheck className="icon-fenxiang iconfont" to={`/list?tab=share`}>
          分享
        </LinkWithCheck>
        <LinkWithCheck className="icon-wenda iconfont" to={`/list?tab=ask`}>
          问答
        </LinkWithCheck>
        <LinkWithCheck className="icon-zhaopin iconfont" to={`/list?tab=job`}>
          招聘
        </LinkWithCheck>
        <LinkWithCheck className="icon-xiaoxi iconfont line" to={`/message`}>
          消息
        </LinkWithCheck>
        <LinkWithCheck className="icon-about iconfont" to={`/about`}>
          关于
        </LinkWithCheck>
      </ul>
    </section>
  );
}

const withCurrentPath = connect(({ state }) => {
  return {
    current: state.location.raw
  }
})

const LinkWithCheck = withCurrentPath(function (props) {
  if (props.to === props.current) {
    let { to, current, ...rest } = props
    return <li {...rest} />
  }

  let { current, ...rest } = props
  return <Link as="li" {...rest} />
})


