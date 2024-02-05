import Const from "./const";
import Icon from "./icon";
import palette from "./palette";
import Size from "./size";
import Style from "./style";
import Wire from "./wire";

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

  get const() {
    return new Const(this._country);
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
    return new Wire();
  }
}

export default Library.instance;
