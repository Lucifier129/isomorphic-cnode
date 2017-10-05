/**
 * actions of method
 */
import { UPDATE_HTML_TITLE } from '../../shared/sharedActions'
import { markdown } from 'markdown'

export const initialState = {
  pageTitle: "详情",
  topic: null,
  activeReplyId: null,
  replyOfOthers: {},
  replyOfTopic: "",
};

/**
 * 
 * 首屏数据为 topic
 */
export const COMPONENT_WILL_CREATE = (state, { topic }) => {
  state = UPDATE_HTML_TITLE(state, topic.title);
  return {
    ...state,
    topic
  };
};

/**
 * 点击其他用户评论下的回复时，
 * 展示评论表单
 * 将当前 replyId 设置为 active 并确保 replyOfOthers[replyId] 不为 undefined
 * 如果再次点击，则收起表单
 */
export const TOGGLE_REPLY_FORM = (state, { activeReplyId }) => {
  if (activeReplyId === state.activeReplyId) {
    return HIDE_REPLY_FORM(state);
  } else {
    return SHOW_REPLY_FORM(state, activeReplyId);
  }
};

export const SHOW_REPLY_FORM = (state, activeReplyId) => {
  let replyOfOthers = state.replyOfOthers;

  if (!replyOfOthers[activeReplyId]) {
    replyOfOthers = {...replyOfOthers}
    let replyItem = state.topic.replies.find(item => item.id === activeReplyId)
    replyOfOthers[activeReplyId] = `@${replyItem.author.loginname} `
  }

  return {
    ...state,
    activeReplyId,
    replyOfOthers
  };
};

export const HIDE_REPLY_FORM = state => {
  return {
    ...state,
    activeReplyId: null
  };
};

export const LIKE_REPLY = (state, { action, replyId }) => {
  let { topic } = state;
  let { token: accesstoken, id: userId } = state.userInfo;

  let replies = topic.replies.map(reply => {
    if (reply.id !== replyId) {
      return reply;
    }
    let { ups } = reply;
    if (action === "down") {
      ups = ups.filter(id => id !== userId);
    } else if (action === "up") {
      ups = ups.concat(userId);
    }
    return {
      ...reply,
      ups
    };
  });

  topic = { ...topic, replies };

  return {
    ...state,
    topic
  };
};

export const REPLY_TO_TOPIC = (state, payload) => {
  state = ADD_REPLY(state, payload)
  return {
    ...state,
    replyOfTopic: ''
  }
}

export const REPLY_TO_OTHER = (state, { replyId, newReplyId, content }) => {
  state = ADD_REPLY(state, {
    replyId: newReplyId,
    content: content,
  })
  
  let replyOfOthers = {
    ...state.replyOfOthers,
    [replyId]: ''
  }

  return {
    ...state,
    replyOfOthers,
  }
}

export const ADD_REPLY = (state, { replyId, content }) => {
  let { userInfo, topic } = state;
  let replyItem = createReplyItem({ replyId, content, userInfo })

  topic = {
    ...topic,
    replies: topic.replies.concat(replyItem)
  }

  return {
    ...state,
    topic
  };
};

function createReplyItem({replyId, content, userInfo}) {
  let create_at = new Date().getTime();
  return {
    id: replyId,
    author: {
      loginname: userInfo.loginname,
      avatar_url: userInfo.avatar_url
    },
    content: markdown.toHTML(content),
    ups: [],
    create_at
  };
}
