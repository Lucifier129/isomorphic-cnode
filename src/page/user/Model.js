/**
 * Model
 */
import { UPDATE_HTML_TITLE } from '../../shared/sharedActions'

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

export const CHANGE_TYPE = (state, type) => {
  return {
    ...state,
    type
  };
};
