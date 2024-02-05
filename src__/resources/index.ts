import mark from "./mark";
import MarkResource from "./mark";
import user from "./user";

class Resources {
  private static _instance: Resources;
  public static get instance() {
    return this._instance || (this._instance = new Resources());
  }

  public get user() {
    return user;
  }

  public get mark() {
    return mark;
  }
}

export default Resources.instance;
