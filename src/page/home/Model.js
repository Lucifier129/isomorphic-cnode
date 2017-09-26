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

/**
 * 在 View 创建前将首屏数据合并到 state 里
 */
export const COMPONENT_WILL_CREATE = (state, data) => {
  return ADD_TOPICS(state, data)
}

/**
 * 
 * 滚动到底部时，加载新的数据并更新查询参数
 */
export const SCROLL_TO_BOTTOM = (state, { data, searchParams }) => {
  state = ADD_TOPICS(state, data);
  state = UPDATE_SEARCH_PARAMS(state, searchParams)
  return state
};


/**
 * 更新查询参数
 */
export const UPDATE_SEARCH_PARAMS = (state, searchParams) => {
  return {
    ...state,
    searchParams,
  }
}


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

