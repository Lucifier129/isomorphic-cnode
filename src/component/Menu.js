import React from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import UserInfo from "./UserInfo";

export default function Menu(props) {
  let { location, userInfo, onClose } = props;
  let className = classnames({
    "nav-list": true,
    show: props.if
  });

  return (
    <section id="sideBar" className={className} onClick={onClose}>
      <UserInfo location={location} userInfo={userInfo} />
      <ul className="list-ul">
        <Link as="li" className="icon-quanbu iconfont" to={`/list?tab=all`}>
          全部
        </Link>
        <Link as="li" className="icon-hao iconfont" to={`/list?tab=good`}>
          精华
        </Link>
        <Link as="li" className="icon-fenxiang iconfont" to={`/list?tab=share`}>
          分享
        </Link>
        <Link as="li" className="icon-wenda iconfont" to={`/list?tab=ask`}>
          问答
        </Link>
        <Link as="li" className="icon-zhaopin iconfont" to={`/list?tab=job`}>
          招聘
        </Link>
        <Link as="li" className="icon-xiaoxi iconfont line" to={`/message`}>
          消息
        </Link>
        <Link as="li" className="icon-about iconfont" to={`/about`}>
          关于
        </Link>
      </ul>
    </section>
  );
}
