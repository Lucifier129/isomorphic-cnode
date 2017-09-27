/**
 * Model
 */

export const initialState = {
  pageTitle: "用户",
  user: null,
  type: "replies",
  currentData: []
};

export const COMPONENT_WILL_CREATE = (state, { user }) => {
  state = UPDATE_HTML_TITLE(state, user.loginname);
  return {
    ...state,
    user
  };
};

export const UPDATE_HTML_TITLE = (state, title) => {
  let html = {
    ...state.html,
    title
  };

  return {
    ...state,
    html
  };
};

export const CHANGE_TYPE = (state, type) => {
  return {
    ...state,
    type
  };
};
