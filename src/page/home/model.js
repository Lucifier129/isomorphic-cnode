/**
 * Model
 */

export const initialState = {
  // 主题列表
  topics: [],
  // 请求参数
  searchParams: {
    page: 1,
    limit: 20,
    tab: "all",
    mdrender: true
  },
};

// 添加主题列表
export const ADD_TOPICS = (state, data) => {
  let topics = data.map(item => {
    let { content, ...topic } = item;
    return topic;
  });

  return {
    ...state,
    topics: state.topics.concat(topics)
  };
};

// 添加主题列表，并更新请求参数
export const ADD_TOPICS_AND_UPDATE_PARAMS = (state, { data, searchParams }) => {
  state = ADD_TOPICS(state, data);
  return {
    ...state,
    searchParams
  };
};