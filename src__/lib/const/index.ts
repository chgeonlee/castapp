import Event from "./event";
import Screen from "./screen";
import String from "./string";

export enum ViewModeEnum {
  LIST = "list",
  MAP = "map",
}

export default class Const {
  constructor(private country) {}

  get string() {
    return new String(this.country);
  }

  get screen() {
    return new Screen();
  }

  get event() {
    return new Event();
  }
}
