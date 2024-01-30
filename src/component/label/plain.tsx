import { StyleSheet, Text, View } from "react-native";
import lib from "../../lib";

export default function PlainLabel({ name, selected = false }) {
  return (
    <View style={[deco.wrap, selected ? deco.selected : null]}>
      <Text
        style={lib.style.font.normal(
          selected ? lib.palette.WHITE : undefined,
          "700"
        )}
      >
        {name}
      </Text>
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    borderWidth: 0.5,
    paddingVertical: lib.size.gap(2),
    paddingHorizontal: lib.size.gap(4),
    borderRadius: lib.size.gap(2),
  },
  selected: {
    backgroundColor: lib.palette.BLACK,
  },
});
