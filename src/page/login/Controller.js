import Controller from "../../shared/BaseController";
import View from "./View";
import * as Model from "./Model";

export default class extends Controller {
  View = View;
  Model = Model;

  handleLogin = async () => {
    let { context } = this;
    let { UPDATE_LOADING_TEXT } = this.store.actions;
    let { token, location } = this.store.getState();

    if (!token || token.length !== 36) {
      this.showAlert("令牌格式错误, 应为36位UUID字符串");
      return;
    }

    UPDATE_LOADING_TEXT("登录中……");

    try {
      let userInfo = await this.getUserInfo(token);
      if (!userInfo) {
        throw new Error("登陆失败，请重试");
      }

      let targetPath = location.query.redirect;
      if (!targetPath) {
        targetPath = `${context.basename}/user/${userInfo.loginname}`;
      }
      
      this.cookie("accesstoken", token);
      window.location.replace(targetPath);
    } catch (error) {
      this.showAlert(error.message);
    } finally {
      UPDATE_LOADING_TEXT("");
    }
  };
}
