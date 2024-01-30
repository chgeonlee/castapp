import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import lib from "../../lib";

export default function PlainButton({ name, onPress }) {
  return (
    <TouchableOpacity style={deco.wrap} onPress={onPress}>
      <Text style={lib.style.font.normal(lib.palette.SILVER, "800")}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const deco = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: lib.size.gap(3),
    width: "100%",
    borderWidth: 0.5,
    borderRadius: lib.size.gap(1),
    borderColor: lib.palette.SILVER,
  },
});
