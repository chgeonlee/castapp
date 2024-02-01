import { StyleSheet, Text, View } from "react-native";
import lib from "../../lib";

export default function PlainLabel({
  name,
  selected = false,
  outline = false,
}) {
  return (
    <View
      style={[
        deco.wrap,
        selected ? deco.selected : null,
        outline ? deco.outline : null,
      ]}
    >
      <Text
        style={lib.style.font.normal(
          selected ? lib.palette.WHITE : undefined,
          "500"
        )}
      >
        {name}
      </Text>
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    //borderWidth: 0.5,
    paddingVertical: lib.size.gap(0),
    paddingHorizontal: lib.size.gap(3),
    borderRadius: lib.size.gap(4),
    backgroundColor: lib.palette.MIST,
  },
  selected: {
    backgroundColor: lib.palette.BLACK,
  },

  outline: {
    backgroundColor: "transparent",
    borderColor: lib.palette.GREY,
    borderWidth: 0.5,
  },
});
