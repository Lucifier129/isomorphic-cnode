// base controller class
import Controller from "react-imvc/controller";
import querystring from "querystring";
import sharedInitialState from "./sharedInitialState";
import * as sharedActions from "./sharedActions";

export default class extends Controller {
  preload = {
    main: "/css/main.css"
  };

  async getInitialState(initialState) {
    let { context } = this;

    let userInfo = null;
    try {
      if (context.hasOwnProperty("userInfo")) {
        userInfo = context.userInfo;
      } else {
        userInfo = await this.getUserInfo();
        context.userInfo = userInfo;
      }
    } catch (_) {
      context.userInfo = null;
    }

    let isLogin = this.isLogin();
    let showAddButton = isLogin;

    return {
      ...sharedInitialState,
      ...initialState,
      userInfo,
      isLogin,
      showAddButton
    };
  }

  /**
     * 动态合并共享的 actions
     */
  getFinalActions(actions) {
    return {
      ...actions,
      ...sharedActions
    };
  }

  /**
   * 数据重用后，将服务端的 userInfo 存入 context 里给其他页面使用
   */
  stateDidReuse(state) {
    if (state.userInfo) {
      this.context.userInfo = state.userInfo;
    }
  }

  // 拓展字段：是否需要登录才可以访问
  needLogin = false;
  async shouldComponentCreate() {
    // 如果需要登录却没登录，去登录页
    if (this.needLogin && !this.isLogin()) {
      this.redirect("/login");
      return false;
    }
  }

  // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问
  async getUserInfo(accesstoken) {
    accesstoken = accesstoken || this.cookie("accesstoken");

    if (!accesstoken) {
      return null;
    }

    let data = await this.post("/accesstoken", { accesstoken });
    let { success, error_msg, ...userInfo } = data;

    if (!success) {
      throw new Error(error_msg);
    }

    return userInfo;
  }

  // 判断是否登录
  isLogin() {
    return !!this.context.userInfo;
  }

  // 封装 get 方法，处理 cnode 跨域要求
  get(api, params, options) {
    return super.get(api, params, {
      ...options,
      credentials: "omit"
    });
  }

  // 封装 post 方法，处理 cnode 跨域要求
  post(api, params, options) {
    return super.post(api, params, {
      ...options,
      credentials: "omit"
    });
  }

  // 隐藏提示信息
  hideAlert = () => {
    let { UPDATE_ALERT_TEXT } = this.store.actions;
    UPDATE_ALERT_TEXT("");
  };

  // 显示提示信息
  showAlert = text => {
    let { UPDATE_ALERT_TEXT } = this.store.actions;
    UPDATE_ALERT_TEXT(text);
    setTimeout(this.hideAlert, 1000);
  };

  // 打开菜单
  handleOpenMenu = () => {
    let state = this.store.getState();
    let { UPDATE_STATE } = this.store.actions;

    if (!state.showMenu) {
      UPDATE_STATE({
        showMenu: true
      });
    }
  };

  // 关闭菜单
  handleCloseMenu = () => {
    let state = this.store.getState();
    let { UPDATE_STATE } = this.store.actions;

    if (state.showMenu) {
      UPDATE_STATE({
        showMenu: false
      });
    }
  };

  // 退出登陆
  handleLogout = () => {
    this.removeCookie("accesstoken");
    window.location.reload();
  };
}
