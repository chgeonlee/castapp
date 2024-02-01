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

  header = (
    c: string = palette.BLACK,
    w: fontWeightType = "300"
  ): StyleProp<TextStyle> => {
    return {
      fontFamily: "Railway-Bold",
      fontSize: 16,
      fontWeight: w,
      color: c,
    };
  };

  title = (
    c: string = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 18,
      fontWeight: w,
      color: c,
      lineHeight: 24,
    };
  };

  subtitle = (
    c: string = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 16,
      fontWeight: w,
      color: c,
    };
  };

  default = (
    c: string = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 13,
      fontWeight: w,
      color: c,
    };
  };

  normal = (
    c: string = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 13,
      fontWeight: w,
      color: c,
      lineHeight: 24,
    };
  };

  description = (
    c: string = palette.BLACK,
    w: fontWeightType = "300"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 11,
      fontWeight: w,
      color: c,
    };
  };

  hint = (
    c: string = palette.BLACK,
    w: fontWeightType = "300"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 10,
      fontWeight: w,
      color: c,
    };
  };
}
