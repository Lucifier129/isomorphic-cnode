import React from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import Layout from "../../component/Layout";
import { getLastTimeStr } from "../../shared/util";

export default function View({ state, handlers }) {
  let { user, type } = state;
  let currentData = user[`recent_${type}`] || [];

  return (
    <Layout>
      <UserInfo user={user} />
      <UserTopics
        type={type}
        currentData={currentData}
        onChange={handlers.handleTypeChange}
      />
    </Layout>
  );
}

function UserInfo({ user }) {
  return (
    <section className="userinfo">
      <img className="u-img" src={user.avatar_url} />
      <br />
      <span className="u-name">{user.loginname}</span>
      <div className="u-bottom">
        <span className="u-time">{getLastTimeStr(user.create_at, false)}</span>
        <span className="u-score">积分：{user.score}</span>
      </div>
    </section>
  );
}

function UserTopics({ currentData, type, onChange }) {
  return (
    <section className="topics">
      <ul className="user-tabs">
        <TabItem
          type={"replies"}
          selected={type === "replies"}
          onChange={onChange}
        >
          最近回复
        </TabItem>
        <TabItem
          type={"topics"}
          selected={type === "topics"}
          onChange={onChange}
        >
          最新发布
        </TabItem>
      </ul>
      <MessageList list={currentData} />
    </section>
  );
}

function TabItem({ type, selected, children, onChange }) {
  let className = classnames({
    item: true,
    br: true,
    selected
  });
  return (
    <li className={className} data-type={type} onClick={onChange}>
      {children}
    </li>
  );
}

function MessageList({ list }) {
  if (!list || list.length === 0) {
    return (
      <div className="no-data">
        <i className="iconfont icon-empty">&#xe60a;</i>
        暂无数据!
      </div>
    );
  }

  return (
    <div>{list.map(message => <Message {...message} key={message.id} />)}</div>
  );
}

function Message(props) {
  let { id, title, author, last_reply_at } = props;
  return (
    <div className="message markdown-body">
      <section className="user">
        <Link
          as="img"
          className="head"
          src={author.avatar_url}
          to={`/user/${author.loginname}`}
        />
        <Link as="div" to={`/topic/${id}`} style={{ 'width': '100%' }}>
          <div className="t-title">{title}</div>
          <span className="cl">
            <span className="name">{author.loginname}</span>
          </span>
          <span className="cr">
            <span className="name">{getLastTimeStr(last_reply_at, true)}</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
