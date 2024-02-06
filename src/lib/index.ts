import Const from "./const";
import Icon from "./icon";
import palette from "./palette";
import Size from "./size";
import Style from "./style";
import time from "./time";
import wire from "./wire";

class Library {
  private static _instance: Library;
  public static get instance() {
    return this._instance || (this._instance = new Library());
  }

  private _country;
  private constructor() {
    // read country code
    this._country = "KR";
  }

  _const: Const;
  get const() {
    return this._const || (this._const = new Const(this._country));
  }

  get style() {
    return new Style();
  }

  get palette() {
    return palette;
  }

  get icon() {
    return new Icon();
  }

  get size() {
    return new Size();
  }

  get wire() {
    return wire;
  }

  get time() {
    return time;
  }
}

export default Library.instance;
