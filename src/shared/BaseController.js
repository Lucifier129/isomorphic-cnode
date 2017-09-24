// base controller class
import Controller from "react-imvc/controller";
import querystring from "querystring";
import sharedInitialState from "./sharedInitialState";

export default class extends Controller {
  preload = {
    main: "/css/main.css"
  };
  // API 集合
  API = {
    userInfo: "/accesstoken",
    topics: "/topics",
    topic: "/topic"
  };
  // 拓展字段：是否需要登录才可以访问
  needLogin = false;

  async getInitialState(initialState) {
    let userInfo = await this.getUserInfo();
    return {
      ...initialState,
      ...sharedInitialState,
      userInfo
    };
  }

  async shouldComponentCreate() {
    // 如果需要登录却没登录，去登录页
    if (this.needLogin && !this.isLogin()) {
      this.redirect("/login");
      return false;
    }
  }

  // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问
  async getUserInfo() {
    let { API, context } = this;

    if (context.hasOwnProperty("userInfo")) {
      return context.userInfo;
    }

    let userInfo = null;
    let accesstoken = this.cookie("accesstoken");

    try {
      userInfo = await this.post("userInfo", { accesstoken });
    } catch (error) {
      userInfo = null;
    }

    context.userInfo = userInfo;
    return userInfo;
  }
  // 判断是否登录
  isLogin() {
    return !!this.context.userInfo;
  }

  // 封装 post 方法，处理 cnode 跨域要求
  post(api, params) {
    let url = this.API[api] || api;
    let options = {
      credentials: "omit",
      method: "POST",
      body: JSON.stringify(params)
    };
    return this.fetch(url, options);
  }

  // 封装 get 方法，处理 cnode 跨域要求
  get(api, params) {
    let url = (this.API[api] || api) + "?" + querystring.stringify(params);
    let options = {
      credentials: "omit",
    };
    return this.fetch(url, options);
  }

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
}
