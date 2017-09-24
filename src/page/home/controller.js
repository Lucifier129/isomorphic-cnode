import Controller from "../../shared/BaseController";
import * as _ from "../../shared/util";
import * as Model from "./Model";
import View from "./View";

export default class extends Controller {
  KeepAlive = true;
  View = View;
  Model = Model;
  // 动态构造初始化数据，从查询字符串里获取数据
  async getInitialState(initialState) {
    let state = await super.getInitialState(initialState);
    let query = state.location.query;
    let searchParams = { ...state.searchParams };
    let pageTitle = state.pageTitle;

    if (query.tab) {
      searchParams.tab = query.tab;
      pageTitle = _.getTitleByTab(query.tab);
    }

    return {
      ...state,
      pageTitle,
      searchParams
    };
  }

  // 组件创建前，获取首屏数据
  async componentWillCreate() {
    let { ADD_TOPICS } = this.store.actions;
    let state = this.store.getState();
    let { searchParams } = state;
    let { data } = await this.get("topics", searchParams);
    ADD_TOPICS(data);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // 是否正在获取数据
  isFetching = false;
  // 滚动到底部时，加载新的数据
  handleScroll = async () => {
    let { ADD_TOPICS_AND_UPDATE_PARAMS } = this.store.actions;
    let state = this.store.getState();
    // 如果正在请求，或者呼出了菜单栏，则不去获取新数据
    if (this.isFetching || state.showMenu) {
      return;
    }

    let scrollHeight = window.innerHeight + window.scrollY;
    let pageHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;
    let searchParams = {
      ...state.searchParams,
      page: state.searchParams.page + 1
    };

    if (pageHeight - scrollHeight <= 200) {
      this.isFetching = true;
      let { data } = await this.get("topics", searchParams);
      ADD_TOPICS_AND_UPDATE_PARAMS({
        data,
        searchParams
      });
      this.isFetching = false;
    }
  };
}
