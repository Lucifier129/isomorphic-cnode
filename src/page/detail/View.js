import React from "react";
import classnames from "classnames";
import { Link, Input } from "react-imvc/component";
import { useCtrl, useModel, useActions } from 'react-imvc/hook'
import { purify, staticify } from '../../shared/hoc'
import * as _ from "../../shared/util";
import Layout from "../../component/Layout";

export default function View({ state, handlers }) {
  let { isLogin, topic, activeReplyId, replyOfOthers } = state;

  let ctrl = useCtrl()
  let model = useModel()
  let actions = useActions()

  console.log({ ctrl, model, actions })

  if (!topic) {
    return (
      <Layout>
        <NoTopic />;
      </Layout>
    );
  }

  return (
    <Layout>
      <div id="page">
        <h2 className="topic-title">{topic.title}</h2>
        <TopicAuthorInfo topic={topic} />
        <StaticTopicContent content={topic.content} />
        <TopicReplyCount count={topic.reply_count} />
        <ReplyForm
          if={isLogin}
          id={-1}
          name="replyOfTopic"
          onSubmit={handlers.handleReplyTopic}
        />
        <TopicReplyList
          replies={topic.replies}
          replyOfOthers={replyOfOthers}
          activeReplyId={activeReplyId}
          isLogin={isLogin}
          handlers={handlers}
        />
      </div>
    </Layout>
  );
}

const StaticTopicContent = staticify()(TopicContent)

function TopicContent({ content }) {
  return (
    <section
      className="markdown-body topic-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function TopicReplyCount({ count }) {
  return (
    <h3 className="topic-reply">
      <strong>{count}</strong> 回复
    </h3>
  );
}

function NoTopic() {
  return (
    <div style={{ height: "100%", background: "#fff" }}>
      <div className="no-data">
        <i className="iconfont icon-empty">&#xe60a;</i>
        该话题不存在!
      </div>
    </div>
  );
}

function TopicAuthorInfo({ topic }) {
  let tagClass = classnames({
    tag: true,
    [_.getTabClassName(topic.tab, topic.good, topic.top)]: true
  });
  return (
    <section className="author-info">
      <Link
        as="img"
        className="avatar"
        src={topic.author.avatar_url}
        to={`/user/${topic.author.loginname}`}
      />
      <div className="col">
        <span>{topic.author.loginname}</span>
        <time>发布于:{_.getLastTimeStr(topic.create_at, true)}</time>
      </div>
      <div className="right">
        <span className={tagClass}>
          {_.getTabStr(topic.tab, topic.good, topic.top)}
        </span>
        <span className="name">{topic.visit_count}次浏览</span>
      </div>
    </section>
  );
}

function ReplyForm(props) {
  if (!props.if) {
    return null;
  }

  let { id, name, onSubmit } = props;

  return (
    <section className="reply">
      <Input
        as="textarea"
        name={name}
        rows="8"
        className="text"
        placeholder="回复支持Markdown语法,请注意标记代码"
      />
      <button className="button" onClick={onSubmit} data-id={id}>
        确定
      </button>
    </section>
  );
}

function TopicReplyList({ replies, replyOfOthers, activeReplyId, isLogin, handlers }) {
  return (
    <section className="reply-list">
      <ul>
        {replies.map(reply => (
          <PureReplyItem
            key={reply.id}
            reply={reply}
            replyContent={replyOfOthers[reply.id]}
            showReplyForm={isLogin && activeReplyId === reply.id}
            handlers={handlers}
          />
        ))}
      </ul>
    </section>
  );
}

const PureReplyItem = purify()(ReplyItem)

function ReplyItem({ reply, replyContent, handlers, showReplyForm }) {
  return (
    <li>
      <section className="user">
        <Link
          as="img"
          className="head"
          src={reply.author.avatar_url}
          to={`/user/${reply.author.loginname}`}
        />
        <div className="info">
          <span className="cl">
            <span className="name">{reply.author.loginname}</span>
            <span className="name mt10">
              <span />发布于:{_.getLastTimeStr(reply.create_at, true)}
            </span>
          </span>
          <span className="cr">
            <LikeIcon
              id={reply.id}
              like={reply.isUps}
              onClick={handlers.handleLikeReply}
            />
            {reply.ups.length}
            <ShowFormButton
              id={reply.id}
              onClick={handlers.handleToggleReplyForm}
            />
          </span>
        </div>
      </section>
      <div
        className="reply_content"
        dangerouslySetInnerHTML={{ __html: reply.content }}
      />
      <ReplyForm
        if={showReplyForm}
        id={reply.id}
        name={`replyOfOthers.${reply.id}`}
        value={replyContent}
        onSubmit={handlers.handleReplyOther}
      />
    </li>
  );
}

function LikeIcon({ id, like, onClick }) {
  let className = classnames({
    iconfont: true,
    icon: true,
    uped: like
  });
  return (
    <span className={className} onClick={onClick} data-id={id}>
      &#xe608;
    </span>
  );
}

function ShowFormButton({ id, onClick }) {
  return (
    <span className="iconfont icon" onClick={onClick} data-id={id}>
      &#xe609;
    </span>
  );
}
