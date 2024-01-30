import { StyleProp, TextStyle } from "react-native/types";
import palette from "../palette";

type fontWeightType =
  | "700"
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "900"
  | undefined;

export default class Font {
  private static _instance: Font;
  public static get instance() {
    return this._instance || (this._instance = new Font());
  }

  logo = (
    c: string = palette.BLACK,
    w: fontWeightType = "700"
  ): StyleProp<TextStyle> => {
    return {
      fontFamily: "Railway-Medium",
      fontSize: 24,
      fontWeight: w,
      color: c,
    };
  };

  normal = (
    c: string = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 14,
      fontWeight: w,
      color: c,
    };
  };

  description = (
    c: string = palette.GREY,
    w: fontWeightType = "300"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 13,
      fontWeight: w,
      color: c,
    };
  };
}
