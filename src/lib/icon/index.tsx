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
import palette from "../palette";

const ICON_DEFAULT_SIZE = 24;

export default class Icon {
  //format-list-bulleted
  list = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <MaterialIcon name="format-list-bulleted" size={s} color={c} />;
  };

  refresh = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <MaterialCommunityIcon name="refresh" size={s} color={c} />;
  };

  map = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <MaterialCommunityIcon name="map-outline" size={s} color={c} />;
  };

  home = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="home" size={s} color={c} />;
  };

  mark = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontistoIcon name="map-marker-alt" size={s} color={c} />;
  };

  find = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="search1" size={s} color={c} />;
  };

  user = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontAwesomeIcon name="user-circle" size={s} color={c} />;
  };

  more = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FeatherIcon name="more-horizontal" size={s} color={c} />;
  };

  heart = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="hearto" size={s} color={c} />;
  };

  comment = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="message1" size={s} color={c} />;
  };

  chat = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="aliwangwang-o1" size={s} color={c} />;
  };

  credit = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="creditcard" size={s} color={c} />;
  };

  plus = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <Ionicons name="add-outline" size={s} color={c} />;
  };

  close = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="close" size={s} color={c} />;
  };

  camera = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FeatherIcon name="camera" size={s} color={c} />;
  };

  link = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FeatherIcon name="link" size={s} color={c} />;
  };

  picture = (s: number = ICON_DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="picture" size={s} color={c} />;
  };
}
