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
    return <FeatherIcon name="more-vertical" size={s} color={c} />;
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
}
