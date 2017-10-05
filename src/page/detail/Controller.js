import Controller from "../../shared/BaseController";
import View from "./View";
import * as Model from "./Model";

export default class extends Controller {
  KeepAlive = true;
  View = View;
  Model = Model;

  async componentWillCreate() {
    let { COMPONENT_WILL_CREATE } = this.store.actions;
    let state = this.store.getState();
    let topicId = state.location.params.topicId;
    let { data: topic } = await this.get(`/topic/${topicId}`);
    COMPONENT_WILL_CREATE({ topic });
  }

  handleToggleReplyForm = ({ currentTarget }) => {
    let { TOGGLE_REPLY_FORM } = this.store.actions;
    let activeReplyId = currentTarget.getAttribute("data-id");
    TOGGLE_REPLY_FORM({ activeReplyId });
  };

  checkLogin() {
    if (!this.isLogin()) {
      this.redirect(`/login?redirect=${this.location.raw}`);
      return false;
    }
    return true;
  }

  async likeReply({ accesstoken, replyId }) {
    let url = `/reply/${replyId}/ups`;
    let { success, action, error_msg } = await this.post(url, { accesstoken });

    if (!success) {
      throw new Error(error_msg);
    }

    return action;
  }

  handleLikeReply = async ({ currentTarget }) => {
    if (this.checkLogin() && this.isLiking) {
      return;
    }
    let { LIKE_REPLY } = this.store.actions;
    let { topic } = this.store.getState();
    let accesstoken = this.cookie("accesstoken");
    let replyId = currentTarget.getAttribute("data-id");

    try {
      let action = await this.likeReply({ accesstoken, replyId });
      LIKE_REPLY({ action, replyId });
    } catch (error) {
      this.showAlert(error.message);
    }
  };

  methods = {
    updateReplyToReply({ currentTarget }) {
      let { UPDATE_FIELD } = this.store.actions;
      let { value } = currentTarget;

      UPDATE_FIELD({
        key: "replyToReply",
        value
      });
    },
    updateReplyToTopic({ currentTarget }) {
      let { UPDATE_FIELD } = this.store.actions;
      let { value } = currentTarget;

      UPDATE_FIELD({
        key: "replyToTopic",
        value
      });
    },

    isLogin() {
      let { userInfo, location } = this.store.getState();
      if (userInfo.id) {
        return true;
      }
      this.goTo(`/login?redirect=${location.raw}`);

      return false;
    },
    async upReply({ currentTarget }) {
      if (!this.isLogin()) {
        return;
      }

      let { UPDATE_FIELD, UPS_REPLAY } = this.store.actions;
      let replyId = currentTarget.getAttribute("data-id");

      try {
        await UPS_REPLAY(replyId);
      } catch (error) {
        alert(error.message);
      }
    },
    showReply({ currentTarget }) {
      if (!this.isLogin()) {
        return;
      }

      let { UPDATE_FIELDS } = this.store.actions;
      let { curReplyId, topic } = this.store.getState();
      let replyId = currentTarget.getAttribute("data-id");
      let [{ author }] = topic.replies.filter(reply => reply.id === replyId);

      if (curReplyId === replyId) {
        return;
      }

      UPDATE_FIELDS([
        {
          key: "curReplyId",
          value: replyId
        },
        {
          key: "replyToReply",
          value: `@${author.loginname} `
        }
      ]);
    },
    async addReply({ currentTarget }) {
      if (!this.isLogin()) {
        return;
      }
      let { ADD_REPLY } = this.store.actions;
      let replyId = currentTarget.getAttribute("data-reply");
      try {
        await ADD_REPLY(replyId);
      } catch (error) {
        alert(error.message);
      }
    }
  };
}
