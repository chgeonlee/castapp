import { StyleSheet, Text, View } from "react-native";
import lib from "../../lib";

interface TextLabelProps {
  name: string;
  inverted?: boolean;
}

export const TextLabel = ({ name, inverted = false }: TextLabelProps) => {
  return (
    <View style={[styles.wrap, inverted ? styles.invert : null]}>
      <Text style={inverted ? styles.invertFontColor : styles.fontColor}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...lib.style.center(),
    backgroundColor: lib.palette.MIST,
    padding: lib.size.gap(0),
    paddingHorizontal: lib.size.hgap(1),
    borderRadius: lib.size.round(0),
  },

  invert: {
    backgroundColor: lib.palette.BLACK,
  },

  fontColor: {
    color: lib.palette.BLACK,
  },

  invertFontColor: {
    color: lib.palette.WHITE,
  },
});
