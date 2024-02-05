import icon from "./icon";
import location from "./location";
import palette from "./palette";
import size from "./size";
import style from "./style";
import wire from "./wire";

class Library {
  private static _instance: Library;
  public static get instance() {
    return this._instance || (this._instance = new Library());
  }

  public get palette() {
    return palette;
  }

  public get size() {
    return size;
  }

  public get icon() {
    return icon;
  }

  public get wire() {
    return wire;
  }

  public get style() {
    return style;
  }

  public get location() {
    return location;
  }
}

export default Library.instance;
