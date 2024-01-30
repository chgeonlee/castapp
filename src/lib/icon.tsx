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

  find = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <AntIcon name="search1" size={s} color={c} />;
  };

  user = (s: number = DEFAULT_SIZE, c: string = palette.BLACK) => {
    return <FontAwesomeIcon name="user-circle" size={s} color={c} />;
  };
}

export default new Icon();
