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
import palette from "./palette";

const DEFAULT_SIZE = 20;

class Icon {
  home = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="home" size={s} color={c} />;
  };
  post = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <MaterialCommunityIcon name="post-outline" size={s} color={c} />;
  };

  mark = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontistoIcon name="map-marker-alt" size={s} color={c} />;
  };

  navi = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FeatherIcon name="navigation" size={s} color={c} />;
  };

  find = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="search1" size={s} color={c} />;
  };

  user = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontAwesomeIcon name="user-circle" size={s} color={c} />;
  };

  heart = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="hearto" size={s} color={c} />;
  };

  comment = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="message1" size={s} color={c} />;
  };

  chat = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="aliwangwang-o1" size={s} color={c} />;
  };

  credit = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="creditcard" size={s} color={c} />;
  };

  plus = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <Ionicons name="add-outline" size={s} color={c} />;
  };

  map = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontAwesome6Icon name="map-location-dot" size={s} color={c} />;
  };
}

export default new Icon();
