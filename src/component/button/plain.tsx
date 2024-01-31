import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import lib from "../../lib";

export default function PlainButton({ name, onPress }) {
  return (
    <TouchableOpacity style={deco.wrap} onPress={onPress}>
      <Text style={lib.style.font.normal(lib.palette.BLACK, "800")}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const deco = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: lib.size.gap(2),
    width: "100%",
    borderRadius: lib.size.gap(1),
    backgroundColor: lib.palette.MIST,
  },
});
