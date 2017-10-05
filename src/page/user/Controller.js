import Controller from "../../shared/BaseController";
import * as Model from "./Model";
import View from "./View";

export default class extends Controller {
  KeepAlive = true
  View = View;
  Model = Model;

  async componentWillCreate() {
    let { COMPONENT_WILL_CREATE } = this.store.actions;
    let state = this.store.getState();
    let { loginname } = state.location.params;
    let { data: user } = await this.get(`/user/${loginname}`);
    COMPONENT_WILL_CREATE({ user });
  }

  handleTypeChange = ({ currentTarget }) => {
    let { CHANGE_TYPE } = this.store.actions;
    let type = currentTarget.getAttribute("data-type");
    CHANGE_TYPE(type);
  };
}
