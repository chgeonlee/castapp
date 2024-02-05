import user from "./user";

class Resources {
  private static _instance: Resources;
  public static get instance() {
    return this._instance || (this._instance = new Resources());
  }

  public get user() {
    return user;
  }
}

export default Resources.instance;
