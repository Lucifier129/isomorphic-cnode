import React from "react";
import classnames from "classnames";
import { Link } from "react-imvc/component";
import Layout from "../../component/Layout";
import * as _ from '../../shared/util'

export default function View({ state, handlers }) {
  let { tab, hasRead, hasNotRead } = state;
  let hasReadClass = classnames({
    item: true,
    br: true,
    selected: tab === "hasRead"
  });
  let hasNotReadClass = classnames({
    item: true,
    br: true,
    selected: tab === "hasNotRead"
  });
  return (
    <Layout>
      <div className="page">
        <ul className="tabs">
          <li
            className={hasReadClass}
            data-tab="hasRead"
            onClick={handlers.handleTabChange}
          >
            已读消息
          </li>
          <li
            className={hasNotReadClass}
            data-tab="hasNotRead"
            onClick={handlers.handleTabChange}
          >
            未读消息
            {hasNotRead.length > 0 && (
              <i className="iconfont read" onClick={handlers.handleMarkAll}>
                &#xe60c;
              </i>
            )}
          </li>
        </ul>
        <MessageContent list={state[tab]} />
      </div>
    </Layout>
  );
}

function MessageContent({ list }) {
  if (!list || !list.length) {
    return <Empty />;
  }
  return <div>{list.map(data => <MessageInfo {...data} key={data.id} />)}</div>;
}

function Empty() {
  return (
    <div className="no-data">
      <i className="iconfont icon-empty">&#xe60a;</i>
      暂无数据!
    </div>
  );
}

function MessageInfo(props) {
  let { id, title, author, type, reply, topic } = props;
  return (
    <div className="message markdown-body">
      <section className="user">
        <Link
          as="img"
          className="head"
          src={author.avatar_url}
          to={`/user/${author.loginname}`}
        />
        <div className="info">
          <span className="cl">
            <span className="name">{author.loginname}</span>
            {type === "at" && <span className="name">在回复中@了您</span>}
            {type === "reply" && <span className="name">回复了您的话题</span>}
          </span>
          <span className="cr">
            <span className="name">
              {_.getLastTimeStr(reply.create_at, true)}
            </span>
          </span>
        </div>
      </section>
      <div
        className="reply_content"
        dangerouslySetInnerHTML={{ __html: reply.content }}
      />
      <Link className="topic-title" to={`/topic/${topic.id}`}>
        话题：{topic.title}
      </Link>
    </div>
  );
}
