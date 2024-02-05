import { ViewStyle } from "react-native/types";
import palette from "../palette";
import Palette from "../palette";

export enum BorderDirection {
  BOTTOM = "Bottom",
  LEFT = "Left",
  RIGHT = "Right",
  TOP = "Top",
}

export default class Style {
  border(d: "" | BorderDirection = "", w = undefined): ViewStyle {
    return {
      ["border" + d + "Width"]: w || 0.5,
      ["border" + d + "Color"]: palette.GREY,
    };
  }

  center(): ViewStyle {
    return {
      justifyContent: "center",
      alignItems: "center",
    };
  }

  flat(): ViewStyle {
    return {
      flexDirection: "row",
    };
  }

  flatBetween(): ViewStyle {
    return {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    };
  }

  fill(): ViewStyle {
    return {
      width: "100%",
      height: "100%",
    };
  }
}
