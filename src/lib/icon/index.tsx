import {
  Ionicons,
  FontAwesome as FontAwesomeIcon,
  AntDesign as AntIcon,
  MaterialCommunityIcons as MaterialCommunityIcon,
  Feather as FeatherIcon,
  Fontisto as FontistoIcon,
  FontAwesome6 as FontAwesome6Icon,
  MaterialIcons as MaterialIcon,
} from "@expo/vector-icons";
import { View } from "react-native";
import palette from "../palette";

const ICON_DEFAULT_SIZE = 24;

export default class Icon {
  private wrapper(component, size: number = ICON_DEFAULT_SIZE) {
    const s = size + 20 < 44 ? 44 : size + 20;
    return (
      <View
        style={{
          width: s,
          height: s,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#e9e9e9",
          borderRadius: 32,
        }}
      >
        {component}
      </View>
    );
  }
  //format-list-bulleted
  list = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <MaterialIcon name="format-list-bulleted" size={s} color={c} />,
      s
    );
  };

  refresh = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <MaterialCommunityIcon name="refresh" size={s} color={c} />,
      s
    );
  };

  map = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <MaterialCommunityIcon name="map-outline" size={s} color={c} />,
      s
    );
  };

  home = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="home" size={s} color={c} />, s);
  };

  mark = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <FontistoIcon name="map-marker-alt" size={s} color={c} />,
      s
    );
  };

  find = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="search1" size={s} color={c} />, s);
  };

  user = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <FontAwesomeIcon name="user-circle" size={s} color={c} />,
      s
    );
  };

  more = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <FeatherIcon name="more-horizontal" size={s} color={c} />,
      s
    );
  };

  heart = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="hearto" size={s} color={c} />, s);
  };

  comment = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="message1" size={s} color={c} />, s);
  };

  chat = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(
      <AntIcon name="aliwangwang-o1" size={s} color={c} />,
      s
    );
  };

  credit = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="creditcard" size={s} color={c} />, s);
  };

  plus = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<Ionicons name="add-outline" size={s} color={c} />, s);
  };

  close = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="close" size={s} color={c} />, s);
  };

  camera = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<FeatherIcon name="camera" size={s} color={c} />, s);
  };

  link = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<FeatherIcon name="link" size={s} color={c} />, s);
  };

  picture = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return this.wrapper(<AntIcon name="picture" size={s} color={c} />, s);
  };
}
