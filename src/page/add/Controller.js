import Controller from "../../shared/BaseController";
import View from "./View";
import * as Model from "./Model";

export default class extends Controller {
  KeepAlive = true;
  NeedLogin = true;
  View = View;
  Model = Model;

  handlePublish = async () => {
    let state = this.store.getState();
    let accesstoken = this.cookie("accesstoken");
    let { title, tab, content } = state;

    if (title.length < 10) {
      this.showAlert("标题不能少于 10 字");
      return;
    }

    if (content.length === 0) {
      this.showAlert("正文不能为空");
      return;
    }

    let params = {
      accesstoken,
      title,
      tab,
      content
    };

    this.showLoading("发布中……");

    try {
      let { topic_id } = await this.post("/topics", params);
      let targetPath = `/topic/${topic_id}`;
      this.removeFromCache();
      this.history.replace(targetPath);
    } catch (error) {
      this.showAlert(error.message);
    }

    this.hideLoading();
  };
}
