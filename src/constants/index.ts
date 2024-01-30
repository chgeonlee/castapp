import event from "./event";
import screen from "./screen";

class Constants {
  private static _instance: Constants;
  public static get instance() {
    return this._instance || (this._instance = new Constants());
  }

  public get screen() {
    return screen;
  }

  public get event() {
    return event;
  }
}

export default Constants.instance;
